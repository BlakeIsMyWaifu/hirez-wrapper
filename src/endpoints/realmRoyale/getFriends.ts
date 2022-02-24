import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface Friends extends ReturnMessage {
	account_id: number;
	name: string;
	player_id: number;
}

export interface GetFriends extends ApiEndpoint {
	[index: number]: Friends;
}

export type GetFriendsEndpoint = (playerId: number) => Promise<GetFriends>

const getFriends: GetFriendsEndpoint = async playerId => await api<GetFriends>('realmroyale', 'getfriends', playerId)

export default getFriends