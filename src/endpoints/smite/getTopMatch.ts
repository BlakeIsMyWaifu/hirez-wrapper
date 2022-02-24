import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface TopMatch extends ReturnMessage {
	Ban1: string;
	Ban1Id: number;
	Ban2: string;
	Ban2Id: number;
	Entry_Datetime: string;
	LiveSpectators: number;
	Match: number;
	Match_Time: number;
	OfflineSpectators: number;
	Queue: string;
	RecordingFinished: string;
	RecordingStarted: string;
	Team1_AvgLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
	Team1_Gold: number;
	Team1_Kills: number;
	Team1_Score: number;
	Team2_AvgLevel: number;
	Team2_Gold: number;
	Team2_Kills: number;
	Team2_Score: number;
	WinningTeam: 1 | 2;
}

export interface GetTopMatches extends ApiEndpoint {
	[index: number]: TopMatch;
}

export type GetTopMatchesEndpoint = () => Promise<GetTopMatches>

const getTopMatches: GetTopMatchesEndpoint = async () => await api<GetTopMatches>('smite', 'gettopmatches')

export default getTopMatches