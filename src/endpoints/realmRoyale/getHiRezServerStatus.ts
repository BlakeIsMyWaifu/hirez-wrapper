import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface HiRezServerStatus extends ApiEndpoint {
	entry_datetime: string;
	limited_access: boolean;
	status: 'UP' | 'DOWN';
	version: string;
}

export interface GetHiRezServerStatus extends ApiEndpoint {
	[index: number]: HiRezServerStatus;
}

export type GetHiRezServerStatusEndpoint = () => Promise<GetHiRezServerStatus>

const getHiRezServerStatus: GetHiRezServerStatusEndpoint = async () => await api<GetHiRezServerStatus>('realmroyale', 'gethirezserverstatus')

export default getHiRezServerStatus