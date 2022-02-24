import { MatchDetails } from 'endpoints/paladins/getMatchDetails'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MatchDetailsBatchSorted extends ReturnMessage {
	Match: number;
	playerMatchDetails: MatchDetails[];
}

export interface GetMatchDetailsBatchSorted extends ApiEndpoint {
	[index: number]: MatchDetailsBatchSorted;
}

export type GetMatchDetailsBatchSortedEndpoint = (matchIds: number[]) => Promise<GetMatchDetailsBatchSorted>

const getMatchDetailsBatchSorted: GetMatchDetailsBatchSortedEndpoint = async matchIds => await api<GetMatchDetailsBatchSorted>('paladins', 'getmatchdetailsbatchsorted', matchIds.join(','))

export default getMatchDetailsBatchSorted