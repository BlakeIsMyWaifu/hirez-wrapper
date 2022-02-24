import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface EsportsProLeagueDetails extends ReturnMessage {
	away_team_clan_id: number;
	away_team_name: string;
	away_team_tagname: string;
	home_team_clan_id: number;
	home_team_name: string;
	home_team_tagname: string;
	map_instance_id: string;
	match_date: string;
	match_number: string;
	match_status: string;
	matchup_id: string;
	region: string;
	tournament_name: string;
	winning_team_clan_id: number;
}

export interface GetEsportsProLeagueDetails extends ApiEndpoint {
	[index: number]: EsportsProLeagueDetails;
}

export type GetEsportsProLeagueDetailsEndpoint = () => Promise<GetEsportsProLeagueDetails>

const getEsportsProLeagueDetails = (game: MainGame): GetEsportsProLeagueDetailsEndpoint => async () => await api<GetEsportsProLeagueDetails>(game, 'getesportsproleaguedetails')

export default getEsportsProLeagueDetails