import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface GodRank extends ReturnMessage {
	Assists: number;
	Deaths: number;
	Kills: number;
	Losses: number;
	MinionKills: number;
	Rank: number;
	Wins: number;
	Worshippers: number;
	god: string;
	god_id: string;
	player_id: string;
}

export interface GetGodRanks extends ApiEndpoint {
	[index: number]: GodRank;
}

export type GetGodRanksEndpoint = (playerId: number) => Promise<GetGodRanks>

const getGodRanks: GetGodRanksEndpoint = async playerId => await api<GetGodRanks>('smite', 'getgodranks', playerId)

export default getGodRanks