import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface TeamDetails extends ReturnMessage {
	Founder: string;
	FounderId: string;
	Losses: number;
	Name: string;
	Players: number;
	Rating: number;
	Tag: string;
	TeamId: number;
	Wins: number;
}

export interface GetTeamDetails extends ApiEndpoint {
	0: TeamDetails;
}

export type GetTeamDetailsEndpoint = (clanId: number) => Promise<GetTeamDetails>

const getTeamDetails: GetTeamDetailsEndpoint = async clanId => await api<GetTeamDetails>('smite', 'getteamdetails', clanId)

export default getTeamDetails