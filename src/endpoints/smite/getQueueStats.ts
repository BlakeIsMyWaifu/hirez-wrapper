import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface QueueStats extends ReturnMessage {
	Assists: number;
	Deaths: number;
	God: string;
	GodId: number;
	Gold: number;
	Kills: number;
	LastPlayed: string;
	Losses: number;
	Matches: number;
	Minutes: number;
	Queue: string;
	Wins: number;
	player_id: string;
}

export interface GetQueueStats extends ApiEndpoint {
	[index: number]: QueueStats;
}

export type GetQueueStatsEndpoint = (playerId: number, queue: number) => Promise<GetQueueStats>

const getQueueStats: GetQueueStatsEndpoint = async (playerId, queue) => await api<GetQueueStats>('smite', 'getqueuestats', playerId, queue)

export default getQueueStats