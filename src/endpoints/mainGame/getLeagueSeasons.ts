import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface GetLeagueSeasons extends ApiEndpoint {
	complete: boolean;
	id: number;
	league_description: string;
	name: string;
	round: number;
	season: number;
}

export type GetLeagueSeasonsEndpoint = (queue: number) => Promise<GetLeagueSeasons>

const getLeagueSeasons = (game: MainGame): GetLeagueSeasonsEndpoint => async queue => await api<GetLeagueSeasons>(game, 'getleagueseasons', queue)

export default getLeagueSeasons