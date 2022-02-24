import { Player } from 'endpoints/paladins/getPlayer'
import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface GetPlayersBatchFromMatch extends ApiEndpoint {
	[index: number]: Player;
}

export type GetPlayersBatchFromMatchEndpoint = (matchId: number) => Promise<GetPlayersBatchFromMatch>

const getPlayersBatchFromMatch: GetPlayersBatchFromMatchEndpoint = async matchId => await api<GetPlayersBatchFromMatch>('paladins', 'getplayersbatchfrommatch', matchId)

export default getPlayersBatchFromMatch