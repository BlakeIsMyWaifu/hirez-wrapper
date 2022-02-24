import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface ChampionLeaderboard extends ReturnMessage {
	champion_id: string;
	losses: string;
	player_id: string;
	player_name: string;
	player_ranking: string;
	rank: string;
	wins: string;
}

export interface GetChampionLeaderboard extends ApiEndpoint {
	[index: number]: ChampionLeaderboard;
}

export type GetChampionLeaderboardEndpoint = (championId: number) => Promise<GetChampionLeaderboard>

const getChampionLeaderboard: GetChampionLeaderboardEndpoint = async championId => await api<GetChampionLeaderboard>('paladins', 'getchampionleaderboard', championId)

export default getChampionLeaderboard