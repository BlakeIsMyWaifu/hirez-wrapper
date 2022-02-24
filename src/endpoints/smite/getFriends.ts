import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface Friends extends ReturnMessage {
	account_id: string;
	avatar_url: string;
	friend_flags: string;
	name: string;
	player_id: string;
	portal_id: string;
	status: string;
}

export interface GetFriends extends ApiEndpoint {
	[index: number]: Friends;
}

export type GetFriendsEndpoint = (playerId: number) => Promise<GetFriends>

const getFriends: GetFriendsEndpoint = async playerId => await api<GetFriends>('smite', 'getfriends', playerId)

export default getFriends