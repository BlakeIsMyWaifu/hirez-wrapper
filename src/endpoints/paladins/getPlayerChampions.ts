import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface PlayerChampions extends ReturnMessage {
	Champion: string;
	ChampionId: number;
	OwnershipType: string;
	PlayerId: number;
	XP: number;
}

export interface GetPlayerChampions extends ApiEndpoint {
	[index: number]: PlayerChampions;
}

export type GetPlayerChampionsEndpoint = (playersIds: number[]) => Promise<GetPlayerChampions>

const getPlayerChampions: GetPlayerChampionsEndpoint = async playersIds => await api<GetPlayerChampions>('paladins', 'getplayerchampions', ...playersIds)

export default getPlayerChampions