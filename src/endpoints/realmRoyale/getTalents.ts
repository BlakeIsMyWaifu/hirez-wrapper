import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface Talents extends ReturnMessage {
	category_name: string;
	item_id: number;
	loot_table_item_id: number;
	talent_description: string;
	talent_name: string;
}

export interface GetTalents extends ApiEndpoint {
	[index: number]: Talents;
}

export type GetTalentsEndpoint = () => Promise<GetTalents>

const getTalents: GetTalentsEndpoint = async () => await api<GetTalents>('realmroyale', 'gettalents')

export default getTalents