import { existsSync, mkdirSync, writeFile } from 'fs'
import { resolve } from 'path'

import { ApiEndpoint } from 'index'
import { Game } from 'utils/api'

export interface DownloadSettings {
	filePath: string;
	fileName: string;
	prettyPrint: boolean;
}

export type Download<T extends ApiEndpoint> = (downloadSettings?: Partial<DownloadSettings>) => T

const download = <T extends ApiEndpoint>(game: Game, method: string, data: T, ...parameters: (string | number)[]): Download<T> => downloadSettings => {
	const { filePath, fileName, prettyPrint } = downloadSettings ?? {}

	const path = filePath ?? resolve('./download/')
	let file = fileName ?? `${+ new Date()}-${game}-${method}`
	if (parameters.length) {
		file += `-${parameters.join('.')}`
	}
	const jsonSpace = prettyPrint ?? true ? 2 : 0

	if (!existsSync(path)) {
		mkdirSync(path, { recursive: true })
	}

	writeFile(`${path}/${file}.json`, JSON.stringify(data, null, jsonSpace), err => {
		if (err) throw err
	})

	return data
}

export default download