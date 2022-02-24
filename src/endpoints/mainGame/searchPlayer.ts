import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PortalIdCodeString } from 'utils/portalId'

export interface Player extends ReturnMessage {
	Name: string;
	hz_player_name: string | null;
	player_id: string;
	portal_id: PortalIdCodeString;
	privacy_flag: 'n' | 'y';
}

export interface SearchPlayer extends ApiEndpoint {
	[index: number]: Player;
}

export type SearchPlayerEndpoint = (playerName: string) => Promise<SearchPlayer>

const searchPlayer = (game: MainGame): SearchPlayerEndpoint => async playerName => await api<SearchPlayer>(game, 'searchplayer', playerName)

export default searchPlayer