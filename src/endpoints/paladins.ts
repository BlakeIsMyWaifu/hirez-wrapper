import getBountyItems, { GetBountyItemsEndpoint } from 'endpoints/paladins/getBountyItems'
import getChampion, { GetChampionEndpoint } from 'endpoints/paladins/getChampion'
import getChampionCards, { GetChampionCardsEndpoint } from 'endpoints/paladins/getChampionCards'
import getChampionLeaderboard, { GetChampionLeaderboardEndpoint } from 'endpoints/paladins/getChampionLeaderboard'
import getChampionRanks, { GetChampionRanksEndpoint } from 'endpoints/paladins/getChampionRanks'
import getChampionSkins, { GetChampionSkinsEndpoint } from 'endpoints/paladins/getChampionSkins'
import getFriends, { GetFriendsEndpoint } from 'endpoints/paladins/getFriends'
import getGodRanks, { GetGodRanksEndpoint } from 'endpoints/paladins/getGodRanks'
import getGods, { GetGodsEndpoint } from 'endpoints/paladins/getGods'
import getGodSkins, { GetGodSkinsEndpoint } from 'endpoints/paladins/getGodSkins'
import getItems, { GetItemsEndpoint } from 'endpoints/paladins/getItems'
import getLeagueLeaderboard, { GetLeagueLeaderboardEndpoint } from 'endpoints/paladins/getLeagueLeaderboard'
import getMatchDetails, { GetMatchDetailsEndpoint } from 'endpoints/paladins/getMatchDetails'
import getMatchDetailsBatch, { GetMatchDetailsBatchEndpoint } from 'endpoints/paladins/getMatchDetailsBatch'
import getMatchDetailsBatchSorted, { GetMatchDetailsBatchSortedEndpoint } from 'endpoints/paladins/getMatchDetailsBatchSorted'
import getMatchHistory, { GetMatchHistoryEndpoint } from 'endpoints/paladins/getMatchHistory'
import getMatchIdsByQueue, { GetMatchIdsByQueueEndpoint } from 'endpoints/paladins/getMatchIdsByQueue'
import getMatchPlayerDetails, { GetMatchPlayerDetailsEndpoint } from 'endpoints/paladins/getMatchPlayerDetails'
import getPlayer, { GetPlayerEndpoint } from 'endpoints/paladins/getPlayer'
import getPlayerAchievements, { GetPlayerAchievementsEndpoint } from 'endpoints/paladins/getPlayerAchievements'
import getPlayerBatch, { GetPlayerBatchEndpoint } from 'endpoints/paladins/getPlayerBatch'
import getPlayerBatchFromMatch, { GetPlayersBatchFromMatchEndpoint } from 'endpoints/paladins/getPlayerBatchFromMatch'
import getPlayerChampions, { GetPlayerChampionsEndpoint } from 'endpoints/paladins/getPlayerChampions'
import getPlayerIdInfoForXboxAndSwitch, { GetPlayerIdInfoForXboxAndSwitchEndpoint } from 'endpoints/paladins/getPlayerIdInfoForXboxAndSwitch'
import getPlayerIdsByGamerTag, { GetPlayerIdsByGamerTagEndpoint } from 'endpoints/paladins/getPlayerIdsByGamerTag'
import getPlayerLoadouts, { GetPlayerLoadoutsEndpoint } from 'endpoints/paladins/getPlayerLoadouts'
import getQueueStats, { GetQueueStatsEndpoint } from 'endpoints/paladins/getQueueStats'

export interface PaldinsEndpoints {
	// Paladins
	getChampion: GetChampionEndpoint;
	getChampionCards: GetChampionCardsEndpoint;
	getChampionLeaderboard: GetChampionLeaderboardEndpoint;
	getChampionSkins: GetChampionSkinsEndpoint;
	getPlayerBatch: GetPlayerBatchEndpoint;
	getPlayerIdInfoForXboxAndSwitch: GetPlayerIdInfoForXboxAndSwitchEndpoint;
	getChampionRanks: GetChampionRanksEndpoint;
	getPlayerLoadouts: GetPlayerLoadoutsEndpoint;
	getBountyItems: GetBountyItemsEndpoint;
	getMatchDetailsBatchSorted: GetMatchDetailsBatchSortedEndpoint;
	getPlayerBatchFromMatch: GetPlayersBatchFromMatchEndpoint;
	getPlayerChampions: GetPlayerChampionsEndpoint;
	// Common
	getPlayer: GetPlayerEndpoint;
	getFriends: GetFriendsEndpoint;
	getMatchDetailsBatch: GetMatchDetailsBatchEndpoint;
	getMatchDetails: GetMatchDetailsEndpoint;
	getMatchIdsByQueue: GetMatchIdsByQueueEndpoint;
	getMatchPlayerDetails: GetMatchPlayerDetailsEndpoint;
	getPlayerAchievements: GetPlayerAchievementsEndpoint;
	getPlayerIdsByGamerTag: GetPlayerIdsByGamerTagEndpoint;
	// Main Game
	getGodRanks: GetGodRanksEndpoint;
	getGodSkins: GetGodSkinsEndpoint;
	getGods: GetGodsEndpoint;
	getItems: GetItemsEndpoint;
	getLeagueLeaderboard: GetLeagueLeaderboardEndpoint;
	getMatchHistory: GetMatchHistoryEndpoint;
	getQueueStats: GetQueueStatsEndpoint;
}

const paladinsEndpoints: PaldinsEndpoints = {
	// Paladins
	getChampion,
	getChampionCards,
	getChampionLeaderboard,
	getChampionSkins,
	getPlayerBatch,
	getPlayerIdInfoForXboxAndSwitch,
	getChampionRanks,
	getPlayerLoadouts,
	getBountyItems,
	getMatchDetailsBatchSorted,
	getPlayerBatchFromMatch,
	getPlayerChampions,
	// Common
	getMatchDetails,
	getMatchIdsByQueue,
	getMatchPlayerDetails,
	getPlayer,
	getFriends,
	getMatchDetailsBatch,
	getPlayerAchievements,
	getPlayerIdsByGamerTag,
	// Main Game
	getGodRanks,
	getGodSkins,
	getGods,
	getItems,
	getLeagueLeaderboard,
	getMatchHistory,
	getQueueStats
}

export default paladinsEndpoints