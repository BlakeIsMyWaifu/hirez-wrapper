import getDataUsed, { GetDataUsedEndpoint } from 'endpoints/realmRoyale/getDataUsed'
import getFriends, { GetFriendsEndpoint } from 'endpoints/realmRoyale/getFriends'
import getHiRezServerStatus, { GetHiRezServerStatusEndpoint } from 'endpoints/realmRoyale/getHiRezServerStatus'
import getLeaderboard, { GetLeaderboardEndpoint } from 'endpoints/realmRoyale/getLeaderboard'
import getMatchDetails, { GetMatchDetailsEndpoint } from 'endpoints/realmRoyale/getMatchDetails'
import getMatchDetailsBatch, { GetMatchDetailsBatchEndpoint } from 'endpoints/realmRoyale/getMatchDetailsBatch'
import getMatchIdsByQueue, { GetMatchIdsByQueueEndpoint } from 'endpoints/realmRoyale/getMatchIdsByQueue'
import getMatchPlayerDetails, { GetMatchPlayerDetailsEndpoint } from 'endpoints/realmRoyale/getMatchPlayerDetails'
import getPatchInfo, { GetPatchInfoEndpoint } from 'endpoints/realmRoyale/getPatchInfo'
import getPlayer, { GetPlayerEndpoint } from 'endpoints/realmRoyale/getPlayer'
import getPlayerAchievements, { GetPlayerAchievementsEndpoint } from 'endpoints/realmRoyale/getPlayerAchievements'
import getPlayerIdByName, { GetPlayerIdByNameEndpoint } from 'endpoints/realmRoyale/getPlayerIdByName'
import getPlayerIdByPortalUserId, { GetPlayerIdByPortalUserIdEndpoint } from 'endpoints/realmRoyale/getPlayerIdByPortalUserId'
import getPlayerIdsByGamerTag, { GetPlayerIdsByGamerTagEndpoint } from 'endpoints/realmRoyale/getPlayerIdsByGamerTag'
import getPlayerMatchHistory, { GetPlayerMatchHistoryEndpoint } from 'endpoints/realmRoyale/getPlayerMatchHistory'
import getPlayerStats, { GetPlayerStatsEndpoint } from 'endpoints/realmRoyale/getPlayerStats'
import getPlayerStatus, { GetPlayerStatusEndpoint } from 'endpoints/realmRoyale/getPlayerStatus'
import getTalents, { GetTalentsEndpoint } from 'endpoints/realmRoyale/getTalents'
import searchPlayer, { SearchPlayerEndpoint } from 'endpoints/realmRoyale/searchPlayer'

export interface RealmRoyaleEndpoints {
	// Realm Royale
	getPlayerStats: GetPlayerStatsEndpoint;
	getPlayerMatchHistory: GetPlayerMatchHistoryEndpoint;
	getLeaderboard: GetLeaderboardEndpoint;
	getTalents: GetTalentsEndpoint;
	// Common
	getPlayer: GetPlayerEndpoint;
	getFriends: GetFriendsEndpoint;
	getMatchDetailsBatch: GetMatchDetailsBatchEndpoint;
	getMatchDetails: GetMatchDetailsEndpoint;
	getMatchIdsByQueue: GetMatchIdsByQueueEndpoint;
	getMatchPlayerDetails: GetMatchPlayerDetailsEndpoint;
	getPlayerAchievements: GetPlayerAchievementsEndpoint;
	getPlayerIdByName: GetPlayerIdByNameEndpoint;
	getPlayerIdByPortalUserId: GetPlayerIdByPortalUserIdEndpoint;
	getPlayerIdsByGamerTag: GetPlayerIdsByGamerTagEndpoint;
	getPlayerStatus: GetPlayerStatusEndpoint;
	searchPlayer: SearchPlayerEndpoint;
	// Main Game
	getHiRezServerStatus: GetHiRezServerStatusEndpoint;
	getPatchInfo: GetPatchInfoEndpoint;
	getDataUsed: GetDataUsedEndpoint;
}

const realmRoyaleEndpoints: RealmRoyaleEndpoints = {
	// Realm Royale
	getPlayerStats,
	getPlayerMatchHistory,
	getLeaderboard,
	getTalents,
	// Common
	getPlayer,
	getFriends,
	getMatchDetailsBatch,
	getMatchDetails,
	getMatchIdsByQueue,
	getMatchPlayerDetails,
	getPlayerAchievements,
	getPlayerIdByName,
	getPlayerIdByPortalUserId,
	getPlayerIdsByGamerTag,
	getPlayerStatus,
	searchPlayer,
	// Main Game
	getHiRezServerStatus,
	getPatchInfo,
	getDataUsed
}

export default realmRoyaleEndpoints