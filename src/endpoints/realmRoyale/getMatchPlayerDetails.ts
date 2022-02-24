import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MatchPlayerDetails extends ReturnMessage {
	Account_Level: number;
	ChampionId: number;
	ChampionName: unknown;
	Mastery_Level: number;
	Match: number;
	Queue: unknown;
	SkinId: number;
	Tier: number;
	mapGame: unknown;
	playerCreated: unknown;
	playerId: unknown;
	playerName?: unknown;
	taskForce: number;
	tierLosses: number;
	tierWins: number;
}

export interface GetMatchPlayerDetails extends ApiEndpoint {
	[index: number]: MatchPlayerDetails;
}

export type GetMatchPlayerDetailsEndpoint = (matchId: number) => Promise<GetMatchPlayerDetails>

const getMatchPlayerDetails: GetMatchPlayerDetailsEndpoint = async matchId => await api<GetMatchPlayerDetails>('realmroyale', 'getmatchplayerdetails', matchId)

export default getMatchPlayerDetails