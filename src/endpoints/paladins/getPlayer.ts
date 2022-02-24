import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { MergedPlayer } from 'utils/commonTypes'
import { PortalId, getPortalId } from 'utils/portalId'

export interface Player extends ReturnMessage {
	ActivePlayerId: number;
	AvatarId: number;
	AvatarURL: unknown;
	Created_Datetime: string;
	HoursPlayed: number;
	Id: number;
	Last_Login_Datetime: string;
	Leaves: number;
	Level: number;
	LoadingFrame: unknown;
	Losses: number;
	MasteryLevel: number;
	MergedPlayers: MergedPlayer[];
	MinutesPlayed: number;
	Name: string;
	Personal_Status_Message: string;
	Platform: string;
	RankedConquest: Ranked<'Conquest'>;
	RankedController: Ranked<'Ranked Controller'>;
	RankedKBM: Ranked<'Ranked KBM'>;
	Region: string;
	TeamId: number;
	Team_Name: string;
	Tier_Conquest: number;
	Tier_RankedController: number;
	Tier_RankedKBM: number;
	Title: unknown;
	Total_Achievements: number;
	Total_Worshippers: number;
	Total_XP: number;
	Wins: number;
	hz_gamer_tag: string | null;
	hz_player_name: string;
}

export type RankedName = 'Conquest' | 'Ranked Controller' | 'Ranked KBM'

export interface Ranked<T extends RankedName> extends ReturnMessage {
	Leaves: number;
	Losses: number;
	Name: T;
	Points: number;
	PrevRank: number;
	Rank: number;
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
	const method = (): Promise<GetPlayer> => portalId ? api<GetPlayer>('paladins', 'getplayer', player, getPortalId(portalId)) : api<GetPlayer>('paladins', 'getplayer', player)
	const data = await method()
	return data
}

export default getPlayer