import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { MergedPlayer } from 'utils/commonTypes'
import { PortalId, getPortalId } from 'utils/portalId'

export interface Player extends ReturnMessage {
	ActivePlayerId: number;
	Avatar_URL: string;
	Created_Datetime: string;
	HoursPlayed: number;
	Id: number;
	Last_Login_Datetime: string;
	Leaves: number;
	Level: number;
	Losses: number;
	MasteryLevel: number;
	MergedPlayers: MergedPlayer[];
	MinutesPlayed: number;
	Name: string;
	Personal_Status_Message: string;
	Platform: string;
	Rank_Stat_Conquest: number;
	Rank_Stat_Conquest_Controller: number;
	Rank_Stat_Duel: number;
	Rank_Stat_Duel_Controller: number;
	Rank_Stat_Joust: number;
	Rank_Stat_Joust_Controller: number;
	RankedConquest: Ranked<'League'>;
	RankedConquestController: Ranked<'League Controller'>;
	RankedDuel: Ranked<'Duel'>;
	RankedDuelController: Ranked<'Duel Controller'>;
	RankedJoust: Ranked<'Joust'>;
	RankedJoustController: Ranked<'Joust Controller'>;
	Region: string;
	TeamId: number;
	Team_Name: string;
	Tier_Conquest: number;
	Tier_Duel: number;
	Tier_Joust: number;
	Total_Achievements: number;
	Total_Worshippers: number;
	Wins: number;
	hz_gamer_tag: string | null;
	hz_player_name: string;
}

export type RankedName = 'League' | 'League Controller' | 'Duel' | 'Duel Controller' | 'Joust' | 'Joust Controller'

export interface Ranked<T extends RankedName> extends ReturnMessage {
	Leaves: number;
	Losses: number;
	Name: T;
	Points: number;
	PrevRank: number;
	Rank: number;
	Rank_Stat: number;
	Rank_Stat_Conquest: unknown;
	Rank_Stat_Joust: unknown;
	Rank_Variance: number;
	Round: number;
	Season: number;
	Tier: number;
	Trend: number;
	Wins: number;
	player_id: unknown;
}

export interface GetPlayer extends ApiEndpoint {
	0: Player;
}

export type GetPlayerEndpoint = (player: string, portalId?: PortalId) => Promise<GetPlayer>

const getPlayer: GetPlayerEndpoint = async (player, portalId) => {
	const method = (): Promise<GetPlayer> => portalId ? api<GetPlayer>('smite', 'getplayer', player, getPortalId(portalId)) : api<GetPlayer>('smite', 'getplayer', player)
	const data = await method()
	return data
}

export default getPlayer