import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface ChampionRank extends ReturnMessage {
	Assists: number;
	Deaths: number;
	Gold: number;
	Kills: number;
	LastPlayed: string;
	Losses: number;
	MinionKills: number;
	Minutes: number;
	Rank: number;
	Wins: number;
	Worshippers: number;
	champion: string;
	champion_id: string;
	player_id: string;
}

export interface GetChampionRanks extends ApiEndpoint {
	[index: number]: ChampionRank;
}

export type GetChampionRanksEndpoint = (playerId: number) => Promise<GetChampionRanks>

const getChampionRanks: GetChampionRanksEndpoint = async playerId => await api<GetChampionRanks>('paladins', 'getchampionranks', playerId)

export default getChampionRanks