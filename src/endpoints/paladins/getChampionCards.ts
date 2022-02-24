import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface ChampionCard extends ReturnMessage {
	active_flag_activation_schedule: 'y';
	active_flag_lti: 'y';
	card_description: string;
	card_id1: number;
	card_id2: number;
	card_name: string;
	card_name_english: string;
	championCard_URL: string;
	championIcon_URL: string;
	championTalent_URL: string | null;
	champion_id: number;
	champion_name: string;
	exclusive: 'n';
	rank: number;
	rarity: 'Common' | 'Legendary';
	recharge_seconds: number;
}

export interface GetChampionCards extends ApiEndpoint {
	[index: number]: ChampionCard;
}

export type GetChampionCardsEndpoint = (championId: number) => Promise<GetChampionCards>

const getChampionCards: GetChampionCardsEndpoint = async championId => await api<GetChampionCards>('paladins', 'getchampioncards', championId)

export default getChampionCards