import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export type Environment = 'live' | 'pts'

export type Platform = 'pc' | 'switch' | 'xbox' | 'ps4'

export interface HiRezServerStatus<E extends Environment, P extends Platform> extends ReturnMessage {
	entry_datetime: string | null;
	environment: E;
	limited_access: boolean;
	platform: P;
	status: 'UP' | 'DOWN';
	version: string;
}

export interface GetHiRezServerStatus extends ApiEndpoint {
	0: HiRezServerStatus<'live', 'pc'>;
	1: HiRezServerStatus<'live', 'switch'>;
	2: HiRezServerStatus<'live', 'xbox'>;
	3: HiRezServerStatus<'live', 'ps4'>;
	4: HiRezServerStatus<'pts', 'pc'>;
}

export type GetHiRezServerStatusEndpoint = () => Promise<GetHiRezServerStatus>

const getHiRezServerStatus = (game: MainGame): GetHiRezServerStatusEndpoint => async () => await api<GetHiRezServerStatus>(game, 'gethirezserverstatus')

export default getHiRezServerStatus