import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { MergedPlayer } from 'utils/commonTypes'
import { PortalIdCodeString } from 'utils/portalId'
import { PaladinQueueId } from 'utils/queue'

export interface MatchDetails extends ReturnMessage {
	Account_Level: number;
	ActiveId1: number;
	ActiveId2: number;
	ActiveId3: number;
	ActiveId4: number;
	ActiveLevel1: number;
	ActiveLevel2: number;
	ActiveLevel3: number;
	ActiveLevel4: number;
	ActivePlayerId: string;
	Assists: number;
	BanId1: number;
	BanId2: number;
	BanId3: number;
	BanId4: number;
	Ban_1: string;
	Ban_2: string;
	Ban_3: string;
	Ban_4: string;
	Camps_Cleared: number;
	ChampionId: number;
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
	Entry_Datetime: string;
	Final_Match_Level: number;
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
	ItemLevel1: number;
	ItemLevel2: number;
	ItemLevel3: number;
	ItemLevel4: number;
	ItemLevel5: number;
	ItemLevel6: number;
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
	League_Losses: number;
	League_Points: number;
	League_Tier: number;
	League_Wins: number;
	Map_Game: string;
	Mastery_Level: number;
	Match: number;
	Match_Duration: number;
	MergedPlayers: MergedPlayer[];
	Minutes: number;
	Multi_kill_Max: number;
	Objective_Assists: number;
	PartyId: number;
	Platform: string;
	Rank_Stat_League: number;
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
	match_queue_id: PaladinQueueId;
	name: string;
	playerId: string;
	playerName: string;
	playerPortalId: PortalIdCodeString | null;
	playerPortalUserId: string | null;
}

export interface GetMatchDetails extends ApiEndpoint {
	[index: number]: MatchDetails;
}

export type GetMatchDetailsEndpoint = (matchId: number) => Promise<GetMatchDetails>

const getMatchDetails: GetMatchDetailsEndpoint = async matchId => await api<GetMatchDetails>('paladins', 'getmatchdetails', matchId)

export default getMatchDetails