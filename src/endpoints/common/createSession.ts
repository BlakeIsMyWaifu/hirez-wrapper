import { ApiEndpoint } from 'index'
import api, { Game } from 'utils/api'

export interface CreateSession extends ApiEndpoint {
	ret_msg: 'Approved';
	session_id: string;
	timestamp: string;
}

export type CreateSessionEndpoint = () => Promise<CreateSession>

const createSession = (game: Game): CreateSessionEndpoint => async () => await api<CreateSession>(game, 'createsession')

export default createSession