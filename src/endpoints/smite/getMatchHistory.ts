import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { SmiteQueueId } from 'utils/queue'

export interface MatchHistory extends ReturnMessage {
	ActiveId1: number;
	ActiveId2: number;
	Active_1: string;
	Active_2: string;
	Active_3: unknown;
	Assists: number;
	Ban1: string;
	Ban10: string;
	Ban10Id: number;
	Ban1Id: number;
	Ban2: string;
	Ban2Id: number;
	Ban3: string;
	Ban3Id: number;
	Ban4: string;
	Ban4Id: number;
	Ban5: string;
	Ban5Id: number;
	Ban6: string;
	Ban6Id: number;
	Ban7: string;
	Ban7Id: number;
	Ban8: string;
	Ban8Id: number;
	Ban9: string;
	Ban9Id: number;
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
	First_Ban_Side: string;
	God: string;
	GodId: number;
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
	Match_Queue_Id: SmiteQueueId;
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

const getMatchHistory: GetMatchHistoryEndpoint = async playerId => await api<GetMatchHistory>('smite', 'getMatchHistory', playerId)

export default getMatchHistory