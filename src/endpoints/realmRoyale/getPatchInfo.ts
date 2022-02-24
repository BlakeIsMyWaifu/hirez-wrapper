import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface GetPatchInfo extends ApiEndpoint, ReturnMessage {
	version: string;
	version_code: string;
	version_id: number;
}

export type GetPatchInfoEndpoint = () => Promise<GetPatchInfo>

const getPatchInfo: GetPatchInfoEndpoint = async () => await api<GetPatchInfo>('realmroyale', 'getpatchinfo')

export default getPatchInfo