import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'

export interface MOTD extends ReturnMessage {
	description: string;
	gameMode: string;
	maxPlayers: string;
	name: string;
	startDateTime: string;
	team1GodsCSV: string;
	team2GodsCSV: string;
	title: string;
}

export interface GetMOTD extends ApiEndpoint {
	[index: number]: MOTD;
}

export type GetMOTDEndpoint = () => Promise<GetMOTD>

const getMOTD: GetMOTDEndpoint = async () => await api<GetMOTD>('smite', 'getmotd')

export default getMOTD