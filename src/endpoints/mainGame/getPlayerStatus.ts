import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { PaladinQueueId, SmiteQueueId } from 'utils/queue'

export interface GetPlayerStatus extends ApiEndpoint, ReturnMessage {
	Match: number;
	match_queue_id: SmiteQueueId | PaladinQueueId;
	personal_status_message: string | null;
	status: 0 | 1 | 2 | 3 | 4 | 5;
	status_string: 'Offline' | 'In Lobby' | 'god Selection' | 'In Game' | 'Online' | 'Unknown';
}

export type GetPlayerStatusEndpoint = (playerId: number) => Promise<GetPlayerStatus>

const getPlayerStatus = (game: MainGame): GetPlayerStatusEndpoint => async playerId => await api<GetPlayerStatus>(game, 'getplayerstatus', playerId)

export default getPlayerStatus