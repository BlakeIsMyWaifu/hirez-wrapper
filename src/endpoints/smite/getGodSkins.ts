import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface GodSkin extends ReturnMessage {
	godIcon_URL: string;
	godSkin_URL: string;
	god_id: number;
	god_name: string;
	obtainability: string;
	price_favor: number;
	price_gems: number;
	skin_id1: number;
	skin_id2: number;
	skin_name: string;
}

export interface GetGodSkins extends ApiEndpoint {
	[index: number]: GodSkin;
}

export type GetGodSkinsEndpoint = (godId: number, langauge: Language) => Promise<GetGodSkins>

const getGodSkins: GetGodSkinsEndpoint = async (godId, langauge) => await api<GetGodSkins>('smite', 'getgodskins', godId, getLanguage(langauge))

export default getGodSkins