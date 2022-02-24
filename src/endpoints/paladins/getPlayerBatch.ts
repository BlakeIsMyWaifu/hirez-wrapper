import { Player } from 'endpoints/paladins/getPlayer'
import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface GetPlayerBatch extends ApiEndpoint {
	[index: number]: Player;
}

export type GetPlayerBatchEndpoint = (playersIds: number[]) => Promise<GetPlayerBatch>

const getPlayerBatch: GetPlayerBatchEndpoint = async playersIds => await api<GetPlayerBatch>('paladins', 'getplayerbatch', ...playersIds)

export default getPlayerBatch