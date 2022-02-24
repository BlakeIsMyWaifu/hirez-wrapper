import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface BountyItem extends ReturnMessage {
	active: string;
	bounty_item_id1: number;
	bounty_item_id2: number;
	bounty_item_name: string;
	final_price: string;
	initial_price: string;
	sale_end_datetime: string;
	sale_type: string;
}

export interface GetBountyItems extends ApiEndpoint {
	[index: number]: BountyItem;
}

export type GetBountyItemsEndpoint = (language: Language) => Promise<GetBountyItems>

const getBountyItems: GetBountyItemsEndpoint = async language => await api<GetBountyItems>('paladins', 'getchampion', getLanguage(language))

export default getBountyItems