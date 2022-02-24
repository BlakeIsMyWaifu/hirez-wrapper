import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MatchIdsByQueue extends ReturnMessage {
	active_flag: 'n' | 'y';
	match: string;
}

export interface GetMatchIdsByQueue extends ApiEndpoint {
	[index: number]: MatchIdsByQueue;
}

export type GetMatchIdsByQueueEndpoint = (queue: number, date: number, hour: number) => Promise<GetMatchIdsByQueue>

const getMatchIdsByQueue: GetMatchIdsByQueueEndpoint = async (queue, date, hour) => await api<GetMatchIdsByQueue>('smite', 'getmatchidsbyqueue', queue, date, hour)

export default getMatchIdsByQueue