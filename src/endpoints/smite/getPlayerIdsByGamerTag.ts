import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PortalId, PortalIdCodeString, getPortalId } from 'utils/portalId'

export interface PlayerIdByGamerTag extends ReturnMessage {
	player_id: number;
	portal: string;
	portal_id: PortalIdCodeString;
	privacy_flag: 'n' | 'y';
}

export interface GetPlayerIdsByGamerTag extends ApiEndpoint {
	[index: number]: PlayerIdByGamerTag;
}

export type GetPlayerIdsByGamerTagEndpoint = (portalId: PortalId, gamerTag: string) => Promise<GetPlayerIdsByGamerTag>

const getPlayerIdsByGamerTag: GetPlayerIdsByGamerTagEndpoint = async (portalId, gamerTag) => await api<GetPlayerIdsByGamerTag>('smite', 'getplayeridsbygamertag', getPortalId(portalId), gamerTag)

export default getPlayerIdsByGamerTag