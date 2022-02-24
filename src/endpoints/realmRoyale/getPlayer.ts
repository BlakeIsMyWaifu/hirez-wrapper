import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PortalId, PortalIdCode, getPortalId } from 'utils/portalId'

export interface GetPlayer extends ApiEndpoint, ReturnMessage {
	created_datetime: string;
	id: number;
	last_login_datetime: string;
	level: number;
	name: string;
	portal: string;
	portal_id: PortalIdCode;
	portal_userid: number;
	region: string;
	steam_id: number;
}

export type GetPlayerEndpoint = (player: string, portalId?: PortalId) => Promise<GetPlayer>

const getPlayer: GetPlayerEndpoint = async (player, portalId) => {
	const method = (): Promise<GetPlayer> => portalId ? api<GetPlayer>('realmroyale', 'getplayer', player, getPortalId(portalId)) : api<GetPlayer>('realmroyale', 'getplayer', player)
	const data = await method()
	return data
}

export default getPlayer