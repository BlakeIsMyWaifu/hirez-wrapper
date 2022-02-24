import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PortalId, PortalIdCodeString } from 'utils/portalId'

export interface PlayerId extends ReturnMessage {
	player_id: number;
	portal: PortalId;
	portal_id: PortalIdCodeString;
}

export interface GetPlayerIdByName extends ApiEndpoint {
	[index: number]: PlayerId;
}

export type GetPlayerIdByNameEndpoint = (playerName: string) => Promise<GetPlayerIdByName>

const getPlayerIdByName = (game: MainGame): GetPlayerIdByNameEndpoint => async playerName => await api<GetPlayerIdByName>(game, 'getplayeridbyname', playerName)

export default getPlayerIdByName