import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface DemoDetails extends ReturnMessage {
	BanId1: number;
	BanId2: number;
	BanId3: number;
	BanId4: number;
	Entry_Datetime: string;
	Match: number;
	Match_Time: number;
	Offline_Spectators: number;
	Queue: string;
	Realtime_Spectators: number;
	Recording_Ended: string;
	Recording_Started: string;
	Team1_AvgLevel: number;
	Team1_Gold: number;
	Team1_Kills: number;
	Team1_Score: number;
	Team2_AvgLevel: number;
	Team2_Gold: number;
	Team2_Kills: number;
	Team2_Score: number;
	Winning_Team: number;
}

export interface GetDemoDetails extends ApiEndpoint {
	0: DemoDetails;
}

export type GetDemoDetailsEndpoint = (matchId: number) => Promise<GetDemoDetails>

const getDemoDetails = (game: MainGame): GetDemoDetailsEndpoint => async matchId => await api<GetDemoDetails>(game, 'getdemodetails', matchId)

export default getDemoDetails