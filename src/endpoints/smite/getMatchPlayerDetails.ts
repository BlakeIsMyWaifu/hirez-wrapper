import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MatchPlayerDetails extends ReturnMessage {
	Account_Gods_Played: number;
	Account_Level: number;
	GodId: number;
	GodLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	GodName: string;
	Mastery_Level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	Match: number;
	Queue: string;
	SkinId: number;
	Tier: number;
	mapGame: string;
	playerCreated: string;
	playerId: string;
	playerName: string;
	playerRegion: string;
	taskForce: 1 | 2;
	tierLosses: number;
	tierWins: number;
}

export interface GetMatchPlayerDetails extends ApiEndpoint {
	[index: number]: MatchPlayerDetails;
}

export type GetMatchPlayerDetailsEndpoint = (matchId: number) => Promise<GetMatchPlayerDetails>

const getMatchPlayerDetails: GetMatchPlayerDetailsEndpoint = async matchId => await api<GetMatchPlayerDetails>('smite', 'getmatchplayerdetails', matchId)

export default getMatchPlayerDetails