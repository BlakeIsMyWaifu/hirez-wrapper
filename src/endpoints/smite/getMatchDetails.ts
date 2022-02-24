import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { MergedPlayer } from 'utils/commonTypes'
import { PortalIdCodeString } from 'utils/portalId'
import { SmiteQueueId } from 'utils/queue'

export interface MatchDetails extends ReturnMessage {
	Account_Level: number;
	ActiveId1: number;
	ActiveId2: number;
	ActiveId3: number;
	ActiveId4: number;
	ActivePlayerId: string;
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
	Camps_Cleared: number;
	Conquest_Losses: number;
	Conquest_Points: number;
	Conquest_Tier: number;
	Conquest_Wins: number;
	Damage_Bot: number;
	Damage_Done_In_Hand: number;
	Damage_Done_Magical: number;
	Damage_Done_Physical: number;
	Damage_Mitigated: number;
	Damage_Player: number;
	Damage_Taken: number;
	Damage_Taken_Magical: number;
	Damage_Taken_Physical: number;
	Deaths: number;
	Distance_Traveled: number;
	Duel_Losses: number;
	Duel_Points: number;
	Duel_Tier: number;
	Duel_Wins: number;
	Entry_Datetime: string;
	Final_Match_Level: number;
	First_Ban_Side: string;
	GodId: number;
	Gold_Earned: number;
	Gold_Per_Minute: number;
	Healing: number;
	Healing_Bot: number;
	Healing_Player_Self: number;
	ItemId1: number;
	ItemId2: number;
	ItemId3: number;
	ItemId4: number;
	ItemId5: number;
	ItemId6: number;
	Item_Active_1: string;
	Item_Active_2: string;
	Item_Active_3: string;
	Item_Active_4: string;
	Item_Purch_1: string;
	Item_Purch_2: string;
	Item_Purch_3: string;
	Item_Purch_4: string;
	Item_Purch_5: string;
	Item_Purch_6: string;
	Joust_Losses: number;
	Joust_Points: number;
	Joust_Tier: number;
	Joust_Wins: number;
	Killing_Spree: number;
	Kills_Bot: number;
	Kills_Double: number;
	Kills_Fire_Giant: number;
	Kills_First_Blood: number;
	Kills_Gold_Fury: number;
	Kills_Penta: number;
	Kills_Phoenix: number;
	Kills_Player: number;
	Kills_Quadra: number;
	Kills_Siege_Juggernaut: number;
	Kills_Single: number;
	Kills_Triple: number;
	Kills_Wild_Juggernaut: number;
	Map_Game: string;
	Mastery_Level: number;
	Match: number;
	Match_Duration: number;
	MergedPlayers: MergedPlayer[];
	Minutes: number;
	Multi_kill_Max: number;
	Objective_Assists: number;
	PartyId: number;
	Rank_Stat_Conquest: number;
	Rank_Stat_Duel: number;
	Rank_Stat_Joust: number;
	Reference_Name: string;
	Region: string;
	Skin: string;
	SkinId: number;
	Structure_Damage: number;
	Surrendered: number;
	TaskForce: number;
	Team1Score: number;
	Team2Score: number;
	TeamId: number;
	Team_Name: string;
	Time_In_Match_Seconds: number;
	Towers_Destroyed: number;
	Wards_Placed: number;
	Win_Status: string;
	Winning_TaskForce: number;
	hasReplay: string;
	hz_gamer_tag: string | null;
	hz_player_name: string;
	match_queue_id: SmiteQueueId;
	name: string;
	playerId: string;
	playerName: string;
	playerPortalId: PortalIdCodeString | null;
	playerPortalUserId: string;
}

export interface GetMatchDetails extends ApiEndpoint {
	[index: number]: MatchDetails;
}

export type GetMatchDetailsEndpoint = (matchId: number) => Promise<GetMatchDetails>

const getMatchDetails: GetMatchDetailsEndpoint = async matchId => await api<GetMatchDetails>('smite', 'getmatchdetails', matchId)

export default getMatchDetails