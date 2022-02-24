import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { RealmRoyaleQueueId } from 'utils/queue'

export interface GetPlayerStatus extends ApiEndpoint, ReturnMessage {
	match_id: number;
	match_queue_id: RealmRoyaleQueueId;
	personal_status_message: string | null;
	status: string;
	status_id: number;
}

export type GetPlayerStatusEndpoint = (playerId: number) => Promise<GetPlayerStatus>

const getPlayerStatus: GetPlayerStatusEndpoint = async playerId => await api<GetPlayerStatus>('realmroyale', 'getplayerstatus', playerId)

export default getPlayerStatus