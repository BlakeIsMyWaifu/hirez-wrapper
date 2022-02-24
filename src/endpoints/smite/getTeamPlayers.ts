import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface TeamPlayer extends ReturnMessage {
	AccountLevel: number;
	JoinedDatetime: string;
	LastLoginDatetime: string;
	Name: string;
}

export interface GetTeamPlayers extends ApiEndpoint {
	[index: number]: TeamPlayer;
}

export type GetTeamPlayersEndpoint = (clanId: number) => Promise<GetTeamPlayers>

const getTeamPlayers: GetTeamPlayersEndpoint = async clanId => await api<GetTeamPlayers>('smite', 'getteamplayers', clanId)

export default getTeamPlayers