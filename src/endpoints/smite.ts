import getFriends, { GetFriendsEndpoint } from 'endpoints/smite/getFriends'
import getGodLeaderboard, { GetGodLeaderboardEndpoint } from 'endpoints/smite/getGodLeaderboard'
import getGodRanks, { GetGodRanksEndpoint } from 'endpoints/smite/getGodRanks'
import getGodRecommendedItems, { GetGodRecommendedItemsEndpoint } from 'endpoints/smite/getGodRecommendedItems'
import getGods, { GetGodsEndpoint } from 'endpoints/smite/getGods'
import getGodSkins, { GetGodSkinsEndpoint } from 'endpoints/smite/getGodSkins'
import getItems, { GetItemsEndpoint } from 'endpoints/smite/getItems'
import getLeagueLeaderboard, { GetLeagueLeaderboardEndpoint } from 'endpoints/smite/getLeagueLeaderboard'
import getMatchDetails, { GetMatchDetailsEndpoint } from 'endpoints/smite/getMatchDetails'
import getMatchDetailsBatch, { GetMatchDetailsBatchEndpoint } from 'endpoints/smite/getMatchDetailsBatch'
import getMatchHistory, { GetMatchHistoryEndpoint } from 'endpoints/smite/getMatchHistory'
import getMatchIdsByQueue, { GetMatchIdsByQueueEndpoint } from 'endpoints/smite/getMatchIdsByQueue'
import getMatchPlayerDetails, { GetMatchPlayerDetailsEndpoint } from 'endpoints/smite/getMatchPlayerDetails'
import getMOTD, { GetMOTDEndpoint } from 'endpoints/smite/getMOTD'
import getPlayer, { GetPlayerEndpoint } from 'endpoints/smite/getPlayer'
import getPlayerAchievements, { GetPlayerAchievementsEndpoint } from 'endpoints/smite/getPlayerAchievements'
import getPlayerIdsByGamerTag, { GetPlayerIdsByGamerTagEndpoint } from 'endpoints/smite/getPlayerIdsByGamerTag'
import getQueueStats, { GetQueueStatsEndpoint } from 'endpoints/smite/getQueueStats'
import getTeamDetails, { GetTeamDetailsEndpoint } from 'endpoints/smite/getTeamDetails'
import getTeamPlayers, { GetTeamPlayersEndpoint } from 'endpoints/smite/getTeamPlayers'
import getTopMatches, { GetTopMatchesEndpoint } from 'endpoints/smite/getTopMatch'
import searchTeams, { SearchTeamsEndpoint } from 'endpoints/smite/searchTeams'

export interface SmiteEndpoints {
	// Smite
	getGodLeaderboard: GetGodLeaderboardEndpoint;
	getGodRecommendedItems: GetGodRecommendedItemsEndpoint;
	searchTeams: SearchTeamsEndpoint;
	getMOTD: GetMOTDEndpoint;
	getTeamDetails: GetTeamDetailsEndpoint;
	getTeamPlayers: GetTeamPlayersEndpoint;
	getTopMatches: GetTopMatchesEndpoint;
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

const smiteEndpoints: SmiteEndpoints = {
	// Smite
	getGodLeaderboard,
	getGodRecommendedItems,
	searchTeams,
	getMOTD,
	getTeamDetails,
	getTeamPlayers,
	getTopMatches,
	// Common
	getPlayer,
	getFriends,
	getMatchDetailsBatch,
	getMatchDetails,
	getMatchIdsByQueue,
	getMatchPlayerDetails,
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

export default smiteEndpoints