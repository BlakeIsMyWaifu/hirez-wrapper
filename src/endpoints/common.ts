import createSession, { CreateSessionEndpoint } from 'endpoints/common/createSession'
import ping, { PingEndpoint } from 'endpoints/common/ping'
import testSession, { TestSessionEndpoint } from 'endpoints/common/testSession'
import { Game } from 'utils/api'

export interface CommonEndpoints {
	// Common
	ping: PingEndpoint;
	createSession: CreateSessionEndpoint;
	testSession: TestSessionEndpoint;
}

type CommonBaseEndpoints = {
	[K in keyof CommonEndpoints]: (game: Game) => CommonEndpoints[K];
}

const common: CommonBaseEndpoints = {
	// Common
	ping,
	createSession,
	testSession
}

export default common