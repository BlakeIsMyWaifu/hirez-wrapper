import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface LeagueLeaderboard extends ReturnMessage {
	Leaves: number;
	Losses: number;
	Name: string;
	Points: number;
	PrevRank: number;
	Rank: number;
	Rank_Stat: number;
	Rank_Variance: number;
	Season: number;
	Tier: number;
	Trend: number;
	Wins: number;
	player_id: string;
}

export interface GetLeagueLeaderboard extends ApiEndpoint {
	[index: number]: LeagueLeaderboard;
}

export type GetLeagueLeaderboardEndpoint = (queueId: number) => Promise<GetLeagueLeaderboard>

const getLeagueLeaderboard: GetLeagueLeaderboardEndpoint = async queueId => await api<GetLeagueLeaderboard>('smite', 'getitems', queueId)

export default getLeagueLeaderboard