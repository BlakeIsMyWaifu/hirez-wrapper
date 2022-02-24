import { expect, test } from '@jest/globals'
import dotenv from 'dotenv'

import { paladins, realmRoyale, smite } from '../src'

dotenv.config({
	path: './tests/.env',
	override: true
})

const { HIREZDEVID: devId, HIREZAUTHKEY: authKey } = process.env

if (!devId || !authKey) {
	throw new Error('DevId or AuthKey have not been set')
}

smite.credentials(devId, authKey)

test('Endpoint', async () => {
	const smiteData = (await smite.getDataUsed()).download({ prettyPrint: true })
	expect(smiteData).toBeTruthy()

	const paladinsData = await paladins.getDataUsed()
	const paladinsDownloadData = paladinsData.download({ prettyPrint: true })
	expect(paladinsData).toEqual(paladinsDownloadData)

	const realmRoyaleData = await realmRoyale.getDataUsed()
	realmRoyaleData.download({ prettyPrint: true })
	expect(realmRoyaleData).toBeTruthy()
})