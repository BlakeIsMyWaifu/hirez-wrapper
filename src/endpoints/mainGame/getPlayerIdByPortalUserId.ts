import { MainGame } from 'endpoints/mainGame'
import { PlayerId } from 'endpoints/mainGame/getPlayerIdByName'
import { ApiEndpoint } from 'index'
import api from 'utils/api'
import { PortalId, getPortalId } from 'utils/portalId'

export interface GetPlayerIdByPortalUserId extends ApiEndpoint {
	[index: number]: PlayerId;
}

export type GetPlayerIdByPortalUserIdEndpoint = (portalId: PortalId, portalUserId: string | number) => Promise<GetPlayerIdByPortalUserId>

const getPlayerIdByPortalUserId = (game: MainGame): GetPlayerIdByPortalUserIdEndpoint => async (portalId, portalUserId) => await api<GetPlayerIdByPortalUserId>(game, 'getplayeridbyportaluserid', getPortalId(portalId), portalUserId)

export default getPlayerIdByPortalUserId