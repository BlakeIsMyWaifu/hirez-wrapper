import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface Champion extends ReturnMessage {
	Ability1: string;
	Ability2: string;
	Ability3: string;
	Ability4: string;
	Ability5: string;
	AbilityId1: number;
	AbilityId2: number;
	AbilityId3: number;
	AbilityId4: number;
	AbilityId5: number;
	Ability_1: ChampionAbility;
	Ability_2: ChampionAbility;
	Ability_3: ChampionAbility;
	Ability_4: ChampionAbility;
	Ability_5: ChampionAbility;
	ChampionAbility1_URL: string;
	ChampionAbility2_URL: string;
	ChampionAbility3_URL: string;
	ChampionAbility4_URL: string;
	ChampionAbility5_URL: string;
	ChampionCard_URL: string;
	ChampionIcon_URL: string;
	Cons: string;
	Health: number;
	Lore: string;
	Name: string;
	Name_English: string;
	OnFreeRotation: string;
	OnFreeWeeklyRotation: string;
	Pantheon: string;
	Pros: string;
	Roles: string;
	Speed: number;
	Title: string;
	Type: string;
	abilityDescription1: string;
	abilityDescription2: string;
	abilityDescription3: string;
	abilityDescription4: string;
	abilityDescription5: string;
	id: number;
	latestChampion: string;
}

export interface ChampionAbility {
	Description: string;
	Id: number;
	Summary: string;
	URL: string;
	damageType: string;
	rechargeSeconds: number;
}

export interface GetChampion extends ApiEndpoint {
	[index: number]: Champion;
}

export type GetChampionEndpoint = (language: Language) => Promise<GetChampion>

const getChampion: GetChampionEndpoint = async language => await api<GetChampion>('paladins', 'getchampion', getLanguage(language))

export default getChampion