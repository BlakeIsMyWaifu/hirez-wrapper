import { ApiEndpoint } from 'index'
import api, { Game } from 'utils/api'

export interface TestSession extends ApiEndpoint {
	ret_msg: string;
}

export type TestSessionEndpoint = () => Promise<TestSession>

const testSession = (game: Game): TestSessionEndpoint => async () => await api<TestSession>(game, 'testsession')

export default testSession