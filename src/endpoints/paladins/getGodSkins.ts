import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface GodSkin extends ReturnMessage {
	champion_id: number;
	champion_name: string;
	rarity: string;
	skin_id1: number;
	skin_id2: number;
	skin_name: string;
	skin_name_english: string;
}

export interface GetGodSkins extends ApiEndpoint {
	[index: number]: GodSkin;
}

export type GetGodSkinsEndpoint = (godId: number, langauge: Language) => Promise<GetGodSkins>

const getGodSkins: GetGodSkinsEndpoint = async (godId, langauge) => await api<GetGodSkins>('paladins', 'getgodskins', godId, getLanguage(langauge))

export default getGodSkins