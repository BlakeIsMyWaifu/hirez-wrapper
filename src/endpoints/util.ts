import { ApiEndpoint } from 'index'
import api, { Game } from 'utils/api'

export type Custom<T extends ApiEndpoint> = (method: string, ...parameters: (string | number)[]) => Promise<T>
const custom = <T extends ApiEndpoint>(game: Game): Custom<T> => async (method, ...parameters) => await api<T>(game, method, ...parameters)

export type Credentials = (devId: string | number, authKey: string) => void
const credentials = (_game: Game): Credentials => (devId, authKey) => {
	process.env.HIREZDEVID = `${devId}`
	process.env.HIREZAUTHKEY = authKey
}

export interface UtilEnpoints {
	custom: Custom<ApiEndpoint>;
	credentials: Credentials;
}

export default {
	custom,
	credentials
}