import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface GetDataUsed extends ApiEndpoint, ReturnMessage {
	active_sessions: number;
	concurrent_sessions: number;
	request_limit_daily: number;
	session_cap: number;
	session_time_limit: number;
	total_requests_today: number;
	total_sessions_today: number;
}

export type GetDataUsedEndpoint = () => Promise<GetDataUsed>

const getDataUsed: GetDataUsedEndpoint = async () => await api<GetDataUsed>('realmroyale', 'getdataused')

export default getDataUsed