import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PortalIdCode } from 'utils/portalId'

export interface Player extends ReturnMessage {
	id: number;
	name: string;
	portal_id: PortalIdCode;
	steam_id: number;
}

export interface SearchPlayer extends ApiEndpoint {
	[index: number]: Player;
}

export type SearchPlayerEndpoint = (playerName: string) => Promise<SearchPlayer>

const searchPlayer: SearchPlayerEndpoint = async playerName => await api<SearchPlayer>('realmroyale', 'searchplayer', playerName)

export default searchPlayer