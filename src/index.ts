import common, { CommonEndpoints } from 'endpoints/common'
import mainGame, { MainGameEndpoints } from 'endpoints/mainGame'
import paladinsEndpoints, { PaldinsEndpoints } from 'endpoints/paladins'
import realmroyaleEndpoints, { RealmRoyaleEndpoints } from 'endpoints/realmRoyale'
import smiteEndpoints, { SmiteEndpoints } from 'endpoints/smite'
import utils, { UtilEnpoints } from 'endpoints/util'
import { Download } from 'utils/download'
import selectGame from 'utils/selectGame'

export interface ApiEndpoint {
	download: Download<this>;
}

export interface ReturnMessage {
	ret_msg: string | null;
}

type Smite = CommonEndpoints & MainGameEndpoints & UtilEnpoints & SmiteEndpoints
export const smite: Smite = {
	...selectGame<CommonEndpoints>(common, 'smite'),
	...selectGame<MainGameEndpoints>(mainGame, 'smite'),
	...selectGame<UtilEnpoints>(utils, 'smite'),
	...smiteEndpoints
}

type Paladins = CommonEndpoints & MainGameEndpoints & UtilEnpoints & PaldinsEndpoints
export const paladins: Paladins = {
	...selectGame<CommonEndpoints>(common, 'paladins'),
	...selectGame<MainGameEndpoints>(mainGame, 'paladins'),
	...selectGame<UtilEnpoints>(utils, 'paladins'),
	...paladinsEndpoints
}

type RealmRoyale = CommonEndpoints & UtilEnpoints & RealmRoyaleEndpoints
export const realmRoyale: RealmRoyale = {
	...selectGame<CommonEndpoints>(common, 'realmroyale'),
	...selectGame<UtilEnpoints>(utils, 'realmroyale'),
	...realmroyaleEndpoints
}

export default {
	smite,
	paladins,
	realmRoyale
}
