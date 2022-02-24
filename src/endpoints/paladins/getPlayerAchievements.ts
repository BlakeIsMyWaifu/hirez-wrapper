import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface GetPlayerAchievements extends ApiEndpoint, ReturnMessage {
	AssistedKills: number;
	CampsCleared: number;
	DivineSpree: number;
	DoubleKills: number;
	FireGiantKills: number;
	FirstBloods: number;
	GodLikeSpree: number;
	GoldFuryKills: number;
	Id: number;
	ImmortalSpree: number;
	KillingSpree: number;
	MinionKills: number;
	Name: string;
	PentaKills: number;
	PhoenixKills: number;
	PlayerKills: number;
	QuadraKills: number;
	RampageSpree: number;
	ShutdownSpree: number;
	SiegeJuggernautKills: number;
	TowerKills: number;
	TripleKills: number;
	UnstoppableSpree: number;
	WildJuggernautKills: number;
}

export type GetPlayerAchievementsEndpoint = (playerId: number) => Promise<GetPlayerAchievements>

const getPlayerAchievements: GetPlayerAchievementsEndpoint = async playerId => await api<GetPlayerAchievements>('paladins', 'getplayerachievements', playerId)

export default getPlayerAchievements