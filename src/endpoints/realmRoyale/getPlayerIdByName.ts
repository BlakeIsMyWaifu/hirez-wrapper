import { ApiEndpoint } from 'index'
import api from 'utils/api'
import { PortalId, PortalIdCode } from 'utils/portalId'

export interface PlayerId {
	id: number;
	portal: PortalId;
	portal_id: PortalIdCode;
}

export interface GetPlayerIdByName extends ApiEndpoint {
	[index: number]: PlayerId;
}

export type GetPlayerIdByNameEndpoint = (playerName: string) => Promise<GetPlayerIdByName>

const getPlayerIdByName: GetPlayerIdByNameEndpoint = async playerName => await api<GetPlayerIdByName>('realmroyale', 'getplayeridbyname', playerName)

export default getPlayerIdByName