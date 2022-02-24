const languages = {
	english: 1,
	german: 2,
	french: 3,
	chinese: 4,
	spanish: 5,
	spanishlatinamerica: 9,
	portuguese: 10,
	russian: 11,
	polish: 12,
	turkish: 13
} as const

type LanguageName = keyof typeof languages
type LanguageCodes = 1 | 2 | 3 | 4 | 5 | 9 | 10 | 11 | 12 | 13
export type Language = LanguageName | LanguageCodes

export const getLanguage = (language: Language): LanguageCodes => typeof language === 'string' ? languages[language] ?? 1 : language