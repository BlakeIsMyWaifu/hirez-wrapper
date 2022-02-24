import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface PlayerIdInfoForXboxAndSwitch extends ReturnMessage {
	Name: string;
	gamer_tag: string;
	platform: 'switch' | 'xbox';
	player_id: string;
	portal_userid: number;
}

export interface GetPlayerIdInfoForXboxAndSwitch extends ApiEndpoint {
	[index: number]: PlayerIdInfoForXboxAndSwitch;
}

export type GetPlayerIdInfoForXboxAndSwitchEndpoint = (playerName: string) => Promise<GetPlayerIdInfoForXboxAndSwitch>

const getPlayerIdInfoForXboxAndSwitch: GetPlayerIdInfoForXboxAndSwitchEndpoint = async playerName => await api<GetPlayerIdInfoForXboxAndSwitch>('paladins', 'getplayeridinfoforxboxandswitch', playerName)

export default getPlayerIdInfoForXboxAndSwitch