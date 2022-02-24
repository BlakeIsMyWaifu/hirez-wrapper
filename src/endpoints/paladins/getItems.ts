import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface Item extends ReturnMessage {
	Description: string;
	DeviceName: string;
	IconId: number;
	ItemId: number;
	Price: number;
	ShortDesc: string;
	champion_id: number;
	itemIcon_URL: string;
	item_type: string;
	recharge_seconds: number;
	talent_reward_level: number;
}

export interface GetItems extends ApiEndpoint {
	[index: number]: Item;
}

export type GetItemsEndpoint = (language: Language) => Promise<GetItems>

const getItems: GetItemsEndpoint = async language => await api<GetItems>('smite', 'getitems', getLanguage(language))

export default getItems