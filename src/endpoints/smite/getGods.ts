import { ApiEndpoint, ReturnMessage } from 'index'
import api from 'utils/api'
import { Language, getLanguage } from 'utils/langauge'

export interface God extends ReturnMessage {
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
	Ability_1: GodAbility;
	Ability_2: GodAbility;
	Ability_3: GodAbility;
	Ability_4: GodAbility;
	Ability_5: GodAbility;
	AttackSpeed: number;
	AttackSpeedPerLevel: number;
	AutoBanned: string;
	Cons: string;
	HP5PerLevel: number;
	Health: number;
	HealthPerFive: number;
	HealthPerLevel: number;
	Lore: string;
	MP5PerLevel: number;
	MagicProtection: number;
	MagicProtectionPerLevel: number;
	MagicalPower: number;
	MagicalPowerPerLevel: number;
	Mana: number;
	ManaPerFive: number;
	ManaPerLevel: number;
	Name: string;
	OnFreeRotation: string;
	Pantheon: string;
	PhysicalPower: number;
	PhysicalPowerPerLevel: number;
	PhysicalProtection: number;
	PhysicalProtectionPerLevel: number;
	Pros: string;
	Roles: string;
	Speed: number;
	Title: string;
	Type: string;
	abilityDescription1: GodAbilityDescription;
	abilityDescription2: GodAbilityDescription;
	abilityDescription3: GodAbilityDescription;
	abilityDescription4: GodAbilityDescription;
	abilityDescription5: GodAbilityDescription;
	basicAttack: GodAbilityDescription;
	godAbility1_URL: string;
	godAbility2_URL: string;
	godAbility3_URL: string;
	godAbility4_URL: string;
	godAbility5_URL: string;
	godCard_URL: string;
	godIcon_URL: string;
	id: number;
	latestGod: string;
}

export interface GodAbility {
	Description: GodAbilityDescription;
	Id: number;
	Summary: string;
	URL: string;
}

export interface GodAbilityDescription {
	itemDescription: {
		cooldown: string;
		cost: string;
		description: string;
		menuitems: GodAbilityDescriptionItem[];
		rankitems: GodAbilityDescriptionItem[];
	};
}

export interface GodAbilityDescriptionItem {
	description: string;
	value: string;
}

export interface GetGods extends ApiEndpoint {
	[index: number]: God;
}

export type GetGodsEndpoint = (language: Language) => Promise<GetGods>

const getGods: GetGodsEndpoint = async language => await api<GetGods>('smite', 'getgods', getLanguage(language))

export default getGods