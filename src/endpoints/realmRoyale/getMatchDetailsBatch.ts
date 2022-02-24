import { MatchDetails } from 'endpoints/realmRoyale/getMatchDetails'
import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface GetMatchDetailsBatch extends ApiEndpoint {
	[index: number]: MatchDetails;
}

export type GetMatchDetailsBatchEndpoint = (matchIds: number[]) => Promise<GetMatchDetailsBatch>

const getMatchDetailsBatch: GetMatchDetailsBatchEndpoint = async matchIds => await api<GetMatchDetailsBatch>('realmroyale', 'getmatchdetailsbatch', matchIds.join(','))

export default getMatchDetailsBatch