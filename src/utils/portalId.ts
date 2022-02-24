const portalIds = {
	'Hi-Rez': 1,
	Steam: 5,
	PS4: 9,
	xbox: 10,
	mixer: 14,
	Switch: 22,
	Discord: 25,
	Epic: 28
} as const

export type PortalIdName = keyof typeof portalIds
export type PortalIdCode = 1 | 5 | 9 | 10 | 14 | 22 | 25 | 28
export type PortalIdCodeString = '1' | '5' | '9' | '10' | '14' | '22' | '25' | '28'
export type PortalId = PortalIdName | PortalIdCode

export const getPortalId = (portalId: PortalId): PortalIdCode => typeof portalId === 'string' ? portalIds[portalId] ?? 1 : portalId