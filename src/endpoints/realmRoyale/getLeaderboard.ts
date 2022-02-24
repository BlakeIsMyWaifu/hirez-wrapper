import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface Leaderboard {
	matches: number;
	player_id: number;
	player_name: string;
	rank: number;
	team_avg_placement: number;
	team_wins: number;
	win_percentage: number;
}

export interface GetLeaderboard extends ApiEndpoint {
	last_update: string;
	leaderboard_details: Leaderboard[];
}

export type GetLeaderboardEndpoint = (queue: number, rankingCriteria: string) => Promise<GetLeaderboard>

const getLeaderboard: GetLeaderboardEndpoint = async (queue, rankingCriteria) => await api<GetLeaderboard>('realmroyale', 'getleaderboard', queue, rankingCriteria)

export default getLeaderboard