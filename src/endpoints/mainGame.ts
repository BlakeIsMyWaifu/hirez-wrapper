import getDataUsed, { GetDataUsedEndpoint } from 'endpoints/mainGame/getDataUsed'
import getDemoDetails, { GetDemoDetailsEndpoint } from 'endpoints/mainGame/getDemoDetails'
import getEsportsProLeagueDetails, { GetEsportsProLeagueDetailsEndpoint } from 'endpoints/mainGame/getEsportsProLeagueDetails'
import getHiRezServerStatus, { GetHiRezServerStatusEndpoint } from 'endpoints/mainGame/getHiRezServerStatus'
import getLeagueSeasons, { GetLeagueSeasonsEndpoint } from 'endpoints/mainGame/getLeagueSeasons'
import getPatchInfo, { GetPatchInfoEndpoint } from 'endpoints/mainGame/getPatchInfo'
import getPlayerIdByName, { GetPlayerIdByNameEndpoint } from 'endpoints/mainGame/getPlayerIdByName'
import getPlayerIdByPortalUserId, { GetPlayerIdByPortalUserIdEndpoint } from 'endpoints/mainGame/getPlayerIdByPortalUserId'
import getPlayerStatus, { GetPlayerStatusEndpoint } from 'endpoints/mainGame/getPlayerStatus'
import searchPlayer, { SearchPlayerEndpoint } from 'endpoints/mainGame/searchPlayer'

export type MainGame = 'smite' | 'paladins'

export interface MainGameEndpoints {
	// Main Game
	getDemoDetails: GetDemoDetailsEndpoint;
	getLeagueSeasons: GetLeagueSeasonsEndpoint;
	getEsportsProLeagueDetails: GetEsportsProLeagueDetailsEndpoint;
	// Common
	getHiRezServerStatus: GetHiRezServerStatusEndpoint;
	getPatchInfo: GetPatchInfoEndpoint;
	getDataUsed: GetDataUsedEndpoint;
	getPlayerIdByName: GetPlayerIdByNameEndpoint;
	getPlayerIdByPortalUserId: GetPlayerIdByPortalUserIdEndpoint;
	getPlayerStatus: GetPlayerStatusEndpoint;
	searchPlayer: SearchPlayerEndpoint;
}

type MainGameBaseEndpoints = {
	[K in keyof MainGameEndpoints]: (game: MainGame) => MainGameEndpoints[K];
}

const mainGame: MainGameBaseEndpoints = {
	// Main Game
	getDemoDetails,
	getLeagueSeasons,
	getEsportsProLeagueDetails,
	// Common
	getHiRezServerStatus,
	getPatchInfo,
	getDataUsed,
	getPlayerIdByName,
	getPlayerIdByPortalUserId,
	getPlayerStatus,
	searchPlayer
}

export default mainGame