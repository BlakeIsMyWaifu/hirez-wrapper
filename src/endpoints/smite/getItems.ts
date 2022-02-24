import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface Item extends ReturnMessage {
	ActiveFlag: string;
	ChildItemId: number;
	DeviceName: string;
	IconId: number;
	ItemDescription: {
		Description: string;
		Menuitems: MenuItem[];
		SecondaryDescription: string;
	};
	ItemId: number;
	ItemTier: number;
	Price: number;
	RestrictedRoles: string;
	RootItemId: number;
	ShortDesc: string;
	StartingItem: boolean;
	Type: 'Item' | 'Consumable' | 'Active';
	itemIcon_URL: string;
}

export interface MenuItem {
	Description: string;
	Value: string;
}

export interface GetItems extends ApiEndpoint {
	[index: number]: Item;
}

export type GetItemsEndpoint = (language: Language) => Promise<GetItems>

const getItems: GetItemsEndpoint = async language => await api<GetItems>('smite', 'getitems', getLanguage(language))

export default getItems