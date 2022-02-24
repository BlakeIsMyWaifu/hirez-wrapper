import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { RealmRoyaleQueueId, RealmRoyaleQueueName } from 'utils/queue'

export interface MatchDetails extends ReturnMessage {
	duration_secs: number;
	match_datetime: Date;
	match_id: number;
	match_queue_id: RealmRoyaleQueueId;
	match_queue_name: RealmRoyaleQueueName;
	region: string;
	teams: MatchDetailsTeam[];
}

export interface MatchDetailsTeam {
	id: number;
	placement: number;
	players: MatchDetailsPlayer[];
}

export interface MatchDetailsPlayer {
	assists: number;
	class_id: number;
	class_name: string;
	damage_done_in_hand: number;
	damage_mitigated: number;
	damage_player: number;
	damage_taken: number;
	deaths: number;
	dropped_out_flag: number;
	duration_secs: number;
	earned_tokens: number;
	earned_xp: number;
	healing_player: number;
	healing_player_self: number;
	id: number;
	killing_spree_max: number;
	kills_bot: number;
	kills_player: number;
	level: number;
	mines_wards_placed: number;
	name: string;
}

export interface GetMatchDetails extends ApiEndpoint, MatchDetails { }

export type GetMatchDetailsEndpoint = (matchId: number) => Promise<GetMatchDetails>

const getMatchDetails: GetMatchDetailsEndpoint = async matchId => await api<GetMatchDetails>('realmroyale', 'getmatchdetails', matchId)

export default getMatchDetails