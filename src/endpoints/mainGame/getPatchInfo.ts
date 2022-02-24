import { MainGame } from 'endpoints/mainGame'
import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface GetPatchInfo extends ApiEndpoint, ReturnMessage {
	version_string: string;
}

export type GetPatchInfoEndpoint = () => Promise<GetPatchInfo>

const getPatchInfo = (game: MainGame): GetPatchInfoEndpoint => async () => await api<GetPatchInfo>(game, 'getpatchinfo')

export default getPatchInfo