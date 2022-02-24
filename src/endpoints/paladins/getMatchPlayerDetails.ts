import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MatchPlayerDetails extends ReturnMessage {
	Account_Champions_Played: number;
	Account_Level: number;
	ChampionId: number;
	ChampionLevel: number;
	ChampionName: string;
	Mastery_Level: number;
	Match: number;
	Queue: string;
	SkinId: number;
	Tier: number;
	mapGame: string;
	playerCreated: string;
	playerId: string;
	playerName: string;
	playerRegion: string;
	taskForce: number;
	tierLosses: number;
	tierWins: number;
}

export interface GetMatchPlayerDetails extends ApiEndpoint {
	[index: number]: MatchPlayerDetails;
}

export type GetMatchPlayerDetailsEndpoint = (matchId: number) => Promise<GetMatchPlayerDetails>

const getMatchPlayerDetails: GetMatchPlayerDetailsEndpoint = async matchId => await api<GetMatchPlayerDetails>('paladins', 'getmatchplayerdetails', matchId)

export default getMatchPlayerDetails