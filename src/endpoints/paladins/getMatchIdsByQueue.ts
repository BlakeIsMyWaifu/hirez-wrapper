import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MatchIdsByQueue extends ReturnMessage {
	Active_Flat: 'n' | 'y';
	Entry_Datetime: string;
	Match: string;
}

export interface GetMatchIdsByQueue extends ApiEndpoint {
	[index: number]: MatchIdsByQueue;
}

export type GetMatchIdsByQueueEndpoint = (queue: number, date: number, hour: number) => Promise<GetMatchIdsByQueue>

const getMatchIdsByQueue: GetMatchIdsByQueueEndpoint = async (queue, date, hour) => await api<GetMatchIdsByQueue>('paladins', 'getmatchidsbyqueue', queue, date, hour)

export default getMatchIdsByQueue