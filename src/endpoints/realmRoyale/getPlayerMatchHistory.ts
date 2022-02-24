import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { RealmRoyaleQueueId, RealmRoyaleQueueName } from 'utils/queue'

export interface PlayerMatchHistoryMatch {
	assists: number;
	class_id: number;
	class_name: string;
	creeps: number;
	damage: number;
	damage_done_in_hand: number;
	damage_mitigated: number;
	damage_taken: number;
	deaths: number;
	gold: number;
	healing_bot: number;
	healing_player: number;
	healing_player_self: number;
	killing_spree_max: number;
	kills: number;
	map_game: string;
	match_datetime: Date;
	match_duration_secs: number;
	match_id: number;
	match_queue_id: RealmRoyaleQueueId;
	match_queue_name: RealmRoyaleQueueName;
	placement: number;
	player_id: number;
	region: string;
	team_id: number;
	time_in_match_minutes: number;
	time_in_match_secs: number;
	wards_mines_placed: number;
}

export interface GetPlayerMatchHistory extends ApiEndpoint, ReturnMessage {
	id: number;
	matches: PlayerMatchHistoryMatch[];
	name: string;
}

export type GetPlayerMatchHistoryEndpoint = (playerId: number) => Promise<GetPlayerMatchHistory>

const getPlayerMatchHistory: GetPlayerMatchHistoryEndpoint = async playerId => await api<GetPlayerMatchHistory>('realmroyale', 'getplayermatchhistory', playerId)

export default getPlayerMatchHistory