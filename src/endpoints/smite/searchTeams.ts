import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface Team extends ReturnMessage {
	Founder: string;
	Name: string;
	Players: number;
	Tag: string;
	TeamId: number;
}

export interface SearchTeams extends ApiEndpoint {
	[index: number]: Team;
}

export type SearchTeamsEndpoint = (searchTeam: string) => Promise<SearchTeams>

const searchTeams: SearchTeamsEndpoint = async searchTeam => await api<SearchTeams>('smite', 'searchteams', searchTeam)

export default searchTeams