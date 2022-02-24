import { createHash } from 'crypto'
import { get } from 'https'

import { CreateSession } from 'endpoints/common/createSession'
import { TestSession } from 'endpoints/common/testSession'
import { ApiEndpoint } from 'index'
import download from 'utils/download'

const gameSession = {
	smite: 'SMITESESSION',
	paladins: 'PALADINSSESSION',
	realmroyale: 'REALMROYALSESSION'
} as const
export type Game = keyof typeof gameSession

const pad = (content: number): string => `${content}`.length >= 2 ? `${content}` : new Array(2 - `${content}`.length + 1).join('0') + content

const timestamp = (): string => {
	const date = new Date(),
		year = date.getUTCFullYear(),
		month = pad(date.getUTCMonth() + 1),
		day = pad(date.getUTCDate()),
		hour = pad(date.getUTCHours()),
		minutes = pad(date.getUTCMinutes()),
		seconds = pad(date.getUTCSeconds())
	return `${year}${month}${day}${hour}${minutes}${seconds}`
}

const generateURL = (game: Game, method: string, ...parameters: (string | number)[]): string => {
	const gameDomain = {
		smite: 'https://api.smitegame.com/smiteapi.svc',
		paladins: 'https://api.paladins.com/paladinsapi.svc',
		realmroyale: 'https://api.realmroyale.com/realmapi.svc'
	} as const

	const { HIREZDEVID: devId, HIREZAUTHKEY: authKey } = process.env
	if (!devId || !authKey) {
		throw new Error('DevId or AuthKey have not been set')
	}

	const signature = createHash('md5').update(devId + method + authKey + timestamp()).digest('hex')

	let url = `${gameDomain[game]}/${method}json`
	if (method !== 'ping') {
		url += `/${devId}/${signature}`
		url += method !== 'createsession' ? `/${process.env[gameSession[game]]}` : ''
		url += `/${timestamp()}`
		url += parameters.length > 0 ? `/${parameters.join('/')}` : ''
	}
	return url
}

const apiFetch = async <T extends ApiEndpoint>(url: string): Promise<T> => new Promise((resolve, reject) => {
	const req = get(url, res => {
		const { statusCode } = res
		if (!statusCode) return reject(new Error('No return status code given'))
		if (statusCode < 200 || statusCode >= 300) return reject(new Error(`StatusCode-${statusCode}`))

		let body = ''
		res.setEncoding('utf8')
		res.on('data', chunk => {
			body += chunk
		})
		res.on('end', () => {
			let out = JSON.parse(body)
			if (typeof out === 'string') {
				out = { ret_msg: body }
			}
			resolve(out)
		})
	})

	req.on('error', err => {
		reject(err)
	})

	req.end()
})

const createSession = async (game: Game): Promise<void> => {
	const url = generateURL(game, 'createsession')
	const session = await apiFetch<CreateSession>(url)
	process.env[gameSession[game]] = session.session_id
}

const testCurrentSession = async (game: Game): Promise<void> => {
	const currentSession = process.env[gameSession[game]]

	if (currentSession) {
		const url = generateURL(game, 'testsession')
		const data = await apiFetch<TestSession>(url)
		if (data.ret_msg.startsWith('This was a successful test with the following parameters added')) return
	}

	await createSession(game)
}

const api = async <T extends ApiEndpoint>(game: Game, endpoint: string, ...parameters: (string | number)[]): Promise<T> => {
	await testCurrentSession(game)

	const url = generateURL(game, endpoint.toLowerCase(), ...parameters)
	const data = await apiFetch<T>(url)

	data.download = download<T>(game, endpoint.toLowerCase(), data, ...parameters)

	return data
}

export default api