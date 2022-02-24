import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface GodRank extends ReturnMessage {
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

export interface GetGodRanks extends ApiEndpoint {
	[index: number]: GodRank;
}

export type GetGodRanksEndpoint = (playerId: number) => Promise<GetGodRanks>

const getGodRanks: GetGodRanksEndpoint = async playerId => await api<GetGodRanks>('paladins', 'getgodranks', playerId)

export default getGodRanks