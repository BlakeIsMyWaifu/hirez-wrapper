import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { SmiteRankedQueueId } from 'utils/queue'

export interface GodLeaderboard extends ReturnMessage {
	god_id: string;
	losses: string;
	player_name: string;
	player_ranking: string;
	rank: string;
	wins: string;
}

export interface GetGodLeaderboard extends ApiEndpoint {
	[index: number]: GodLeaderboard;
}

export type GetGodLeaderboardEndpoint = (godId: number, queue: SmiteRankedQueueId) => Promise<GetGodLeaderboard>

const getGodLeaderboard: GetGodLeaderboardEndpoint = async (godId, queue) => await api<GetGodLeaderboard>('smite', 'getgodleaderboard', godId, queue)

export default getGodLeaderboard