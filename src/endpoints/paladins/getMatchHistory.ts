import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PaladinQueueId } from 'utils/queue'

export interface MatchHistory extends ReturnMessage {
	ActiveId1: number;
	ActiveId2: number;
	ActiveId3: number;
	ActiveId4: number;
	ActiveLevel1: number;
	ActiveLevel2: number;
	ActiveLevel3: number;
	ActiveLevel4: number;
	Active_1: string;
	Active_2: string;
	Active_3: string;
	Active_4: string;
	Assists: number;
	Champion: string;
	ChampionId: number;
	Creeps: number;
	Damage: number;
	Damage_Bot: number;
	Damage_Done_In_Hand: number;
	Damage_Mitigated: number;
	Damage_Structure: number;
	Damage_Taken: number;
	Damage_Taken_Magical: number;
	Damage_Taken_Physical: number;
	Deaths: number;
	Distance_Traveled: number;
	Gold: number;
	Healing: number;
	Healing_Bot: number;
	Healing_Player_Self: number;
	ItemId1: number;
	ItemId2: number;
	ItemId3: number;
	ItemId4: number;
	ItemId5: number;
	ItemId6: number;
	ItemLevel1: number;
	ItemLevel2: number;
	ItemLevel3: number;
	ItemLevel4: number;
	ItemLevel5: number;
	ItemLevel6: number;
	Item_1: string;
	Item_2: string;
	Item_3: string;
	Item_4: string;
	Item_5: string;
	Item_6: string;
	Killing_Spree: number;
	Kills: number;
	Level: number;
	Map_Game: string;
	Match: number;
	Match_Queue_Id: PaladinQueueId;
	Match_Time: string;
	Minutes: number;
	Multi_kill_Max: number;
	Objective_Assists: number;
	Queue: string;
	Region: string;
	Skin: string;
	SkinId: number;
	Surrendered: number;
	TaskForce: number;
	Team1Score: number;
	Team2Score: number;
	Time_In_Match_Seconds: number;
	Wards_Placed: number;
	Win_Status: string;
	Winning_TaskForce: number;
	playerId: number;
	playerName: string;
}

export interface GetMatchHistory extends ApiEndpoint {
	[index: number]: MatchHistory;
}

export type GetMatchHistoryEndpoint = (playerId: number) => Promise<GetMatchHistory>

const getMatchHistory: GetMatchHistoryEndpoint = async playerId => await api<GetMatchHistory>('paladins', 'getMatchHistory', playerId)

export default getMatchHistory