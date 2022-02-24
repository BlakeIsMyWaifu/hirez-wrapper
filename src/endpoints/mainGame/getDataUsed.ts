import { ApiEndpoint, ReturnMessage } from 'index'
import api, { Game } from 'utils/api'

export interface DataUsed extends ReturnMessage {
	Active_Sessions: number;
	Concurrent_Sessions: number;
	Request_Limit_Daily: number;
	Session_Cap: number;
	Session_Time_Limit: number;
	Total_Requests_Today: number;
	Total_Sessions_Today: number;
}

export interface GetDataUsed extends ApiEndpoint {
	[index: number]: DataUsed;
}

export type GetDataUsedEndpoint = () => Promise<GetDataUsed>

const getDataUsed = (game: Game): GetDataUsedEndpoint => async () => await api<GetDataUsed>(game, 'getdataused')

export default getDataUsed