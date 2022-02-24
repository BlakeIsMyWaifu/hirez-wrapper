import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { RealmRoyaleQueueId, RealmRoyaleQueueName } from 'utils/queue'

export interface PlayerStats extends ReturnMessage {
	aggregate_stats: PlayerStatsAggregateStats;
	placement_window_end: Date;
	placement_window_start: Date;
	player_id: number;
	queue_class_stats: PlayerStatsQueueClassStat[];
}

export interface PlayerStatsAggregateStats {
	assists: number;
	average_placement: number;
	damage: number;
	damage_done_in_hand: number;
	damage_mitigated: number;
	damage_taken: number;
	deaths: number;
	duration_secs: number;
	earned_tokens: number;
	earned_xp: number;
	games_played: number;
	healing_player: number;
	healing_player_self: number;
	killing_spree_max: number;
	kills_bot: number;
	kills_player: number;
	losses: number;
	placement_list: string;
	placements: PlayerStatsPlacement[];
	wards_mines_placed: number;
	wins: number;
}

export interface PlayerStatsPlacement {
	occurrences: number;
	position: string;
}

export interface PlayerStatsQueueClassStat {
	class_id: number;
	class_name: string;
	match_queue_id: RealmRoyaleQueueId;
	match_queue_name: RealmRoyaleQueueName;
	stats: PlayerStatsStats;
}

export interface PlayerStatsStats {
	assists: number;
	average_placement: number;
	damage: number;
	damage_done_in_hand: number;
	damage_mitigated: number;
	damage_taken: number;
	deaths: number;
	duration_secs: number;
	earned_tokens: number;
	earned_xp: number;
	games_played: number;
	healing_player: number;
	healing_player_self: number;
	killing_spree_max: number;
	kills_bot: number;
	kills_player: number;
	losses: number;
	placement_list: string;
	placements: PlayerStatsPlacement[];
	wards_mines_placed: number;
	wins: number;
}

export interface GetPlayerStats extends ApiEndpoint, PlayerStats { }

export type GetPlayerStatsEndpoint = (playerId: number) => Promise<GetPlayerStats>

const getPlayerStats: GetPlayerStatsEndpoint = async playerId => await api<GetPlayerStats>('realmroyale', 'getplayerstats', playerId)

export default getPlayerStats