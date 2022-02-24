import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface PlayerLoadout extends ReturnMessage {
	ChampionId: number;
	ChampionName: string;
	DeckId: number;
	DeckName: string;
	LoadoutItems: {
		0: PlayerLoadoutItem;
		1: PlayerLoadoutItem;
		2: PlayerLoadoutItem;
		3: PlayerLoadoutItem;
		4: PlayerLoadoutItem;
	};
	playerId: number;
	playerName: string;
}

export interface PlayerLoadoutItem {
	ItemId: number;
	ItemName: string;
	Points: 1 | 2 | 3 | 4 | 5;
}

export interface GetPlayerLoadouts extends ApiEndpoint {
	[index: number]: PlayerLoadout;
}

export type GetPlayerLoadoutsEndpoint = (playerId: number) => Promise<GetPlayerLoadouts>

const getPlayerLoadouts: GetPlayerLoadoutsEndpoint = async playerId => await api<GetPlayerLoadouts>('paladins', 'getplayerloadouts', playerId)

export default getPlayerLoadouts