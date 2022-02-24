import { MatchIdsByQueue } from 'endpoints/smite/getMatchIdsByQueue'
import { ApiEndpoint } from 'index'
import api from 'utils/api'

export interface GetMatchIdsByQueue extends ApiEndpoint, MatchIdsByQueue { }

export type GetMatchIdsByQueueEndpoint = (queue: number, date: number, hour: number) => Promise<GetMatchIdsByQueue>

const getMatchIdsByQueue: GetMatchIdsByQueueEndpoint = async (queue, date, hour) => await api<GetMatchIdsByQueue>('realmroyale', 'getmatchidsbyqueue', queue, date, hour)

export default getMatchIdsByQueue