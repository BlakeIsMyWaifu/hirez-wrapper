import { ApiEndpoint } from 'index'
import api, { Game } from 'utils/api'

export interface Ping extends ApiEndpoint {
	ret_msg: string;
}

export type PingEndpoint = () => Promise<Ping>

const ping = (game: Game): PingEndpoint => async () => await api<Ping>(game, 'ping')

export default ping