import { ApiEndpoint } from 'index'
import api from 'utils/api'
import { PortalId, PortalIdCode, getPortalId } from 'utils/portalId'

export interface PlayerIdByGamerTag {
	id: number;
	portal: string;
	portal_id: PortalIdCode;
}

export interface GetPlayerIdsByGamerTag extends ApiEndpoint {
	[index: number]: PlayerIdByGamerTag;
}

export type GetPlayerIdsByGamerTagEndpoint = (portalId: PortalId, gamerTag: string) => Promise<GetPlayerIdsByGamerTag>

const getPlayerIdsByGamerTag: GetPlayerIdsByGamerTagEndpoint = async (portalId, gamerTag) => await api<GetPlayerIdsByGamerTag>('realmroyale', 'getplayeridsbygamertag', getPortalId(portalId), gamerTag)

export default getPlayerIdsByGamerTag