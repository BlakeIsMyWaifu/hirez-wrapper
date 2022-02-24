import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface ChampionSkin extends ReturnMessage {
	champion_id: number;
	champion_name: string;
	rarity: string;
	skin_id1: number;
	skin_id2: number;
	skin_name: string;
	skin_name_english: string;
}

export interface GetChampionSkins extends ApiEndpoint {
	[index: number]: ChampionSkin;
}

export type GetChampionSkinsEndpoint = (championId: number) => Promise<GetChampionSkins>

const getChampionSkins: GetChampionSkinsEndpoint = async championId => await api<GetChampionSkins>('paladins', 'getchampionskins', championId)

export default getChampionSkins