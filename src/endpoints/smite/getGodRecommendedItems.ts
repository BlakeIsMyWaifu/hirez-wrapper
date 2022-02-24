import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface GodRecommendedItem extends ReturnMessage {
	Category: 'Consumable' | 'Core' | 'Damage' | 'Defensive' | 'Relic' | 'Starter';
	Item: string;
	Role: 'Standard' | 'Tutorial' | 'NGM3_PEP' | 'Arena' | 'Adventures';
	category_value_id: number;
	god_id: number;
	god_name: string;
	icon_id: number;
	item_id: number;
	role_value_id: number;
}

export interface GetGodRecommendedItems extends ApiEndpoint {
	[index: number]: GodRecommendedItem;
}

export type GetGodRecommendedItemsEndpoint = (godId: number, langauge: Language) => Promise<GetGodRecommendedItems>

const getGodRecommendedItems: GetGodRecommendedItemsEndpoint = async (godId, langauge) => await api<GetGodRecommendedItems>('smite', 'getgodrecommendeditems', godId, getLanguage(langauge))

export default getGodRecommendedItems