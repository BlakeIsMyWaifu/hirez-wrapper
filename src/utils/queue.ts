export interface SmiteQueues {
	426: 'Conquest';
	435: 'Arena Queue';
	448: 'Joust Queued (3v3)';
	445: 'Assault';
	466: 'Clash';
	10195: 'Under 30 Arena';
	504: 'Conquest Ranked Controller';
	451: 'Conquest Ranked';
	434: 'MOTD';
	10193: 'Under 30 Conquest';
	10197: 'Under 30 Joust';
	459: 'Siege 4v4';
	503: 'Joust 3v3 Ranked Controller';
	441: 'Joust Challenge';
	468: 'Arena (vs AI) (Medium)';
	508: 'Adventures Ch11 Corrupted Arena v3';
	450: 'Joust 3v3 Ranked';
	456: 'Joust (vs AI) (Medium)';
	461: 'Conquest (vs AI) (Medium)';
	502: 'Joust Ranked (1v1) Controller';
	462: 'Arena Tutorial';
	440: 'Joust Ranked (1v1)';
	10190: 'Duel Custom';
	10152: 'S7 Joust Custom';
	429: 'Conquest Challenge';
	438: 'Arena Challenge';
	10161: 'Conquest (vs AI) (Hard)';
	10162: 'Joust (vs AI) (Very Hard)';
	457: 'Arena (vs AI) (Very Easy)';
	10158: 'Arena (vs AI) (Very Hard)';
	476: 'Conquest (vs AI) (Easy)';
	10177: 'Classic Joust Custom';
	474: 'Joust (vs AI) (Very Easy)';
	467: 'Clash Challenge';
	472: 'Arena Practice (Medium)';
	443: 'Arena Practice (Easy)';
	10167: 'Arena Practice (Hard)';
	481: 'Assault (vs AI) (Easy)';
	446: 'Assault Challenge';
	478: 'Clash (vs AI) (Easy)';
	469: 'Clash (vs AI) (Medium)';
	10160: 'Clash (vs AI) (Hard)';
	473: 'Joust Practice (Medium)';
	10171: 'Joust Practice (Hard)';
	10159: 'Assault (vs AI) (Hard)';
	454: 'Assault (vs AI) (Medium)';
	10189: 'Slash';
	460: 'Siege Challenge';
	458: 'Conquest Practice (Easy)';
	475: 'Conquest Practise (Medium)';
	10170: 'Conquest Practise (Hard)';
	464: 'Joust Practise (Easy)';
	10151: 'Adventures Ch11 Corrupted Arena...';
	479: 'Assault Practice (Easy)';
	477: 'Clash Practice (Medium)';
	470: 'Clash Practice (Easy)';
	10169: 'Clash Practice (Hard)';
	480: 'Assault Practice (Medium)';
	10168: 'Assault Practice (Hard)';
	10191: 'Slash Custom';
	10201: 'Slash Practice (Easy)';
	10198: 'Slash (vs AI) (Easy)';
	10199: 'Slash (vs AI) (Medium)';
	10200: 'Slash (vs AI) (Hard)';
	10203: 'Slash Practice (Hard)';
	10202: 'Slash Practice (Medium';
	436: 'Basic Tutorial';
}

export type SmiteQueueId = keyof SmiteQueues

export type SmiteRankedQueueId = 440 | 450 | 451

//

export interface PaladinQueues {
	424: 'LIVE Siege';
	469: 'LIVE Team Deathmatch';
	452: 'LIVE Onslaught';
	486: 'LIVE Competitive KBM';
	470: 'LIVE Team Deathmatch Practice';
	425: 'LIVE Practice Siege';
	428: 'LIVE Competitive Gamepad';
	453: 'LIVE Onslaught Practice';
	10241: 'LTM PickAny';
	480: 'Custom DM Throne';
	10251: 'LTM Knock On Wood';
	468: 'Custom DM Trade District';
	472: 'Custom DM Magistrate\'s Archives';
	471: 'Custom DM Foreman\'s Rise';
	484: 'Custom DM Dragon Arena';
	454: 'Custom DM_SnowfallJunction';
	479: 'Custom DM Abyss';
	458: 'Custom S_Brightmarsh';
	433: 'Custom S_FrogIsle';
	438: 'Custom S_JaguarFalls';
	431: 'Custom S_FishMarket';
	473: 'Custom S_AscensionPeak';
	464: 'Custom O_Magistrate\'s Archives';
	462: 'Custom O_Foreman\'s Rise';
	459: 'Custom S_SplitstoneQuarry';
	440: 'Custom S_SerpentBeach';
	426: 'Custom S_Bazaar';
	10210: 'Custom S_StoneKeep_V2_Night';
	430: 'Custom S_TimberMill';
	10239: 'Custom S_StoneKeep_V2_Day';
	455: 'Custom O_PrimalCourt';
	439: 'Custom S_IceMines';
	432: 'Custom S_FrozenGuard';
	10200: 'Custom KOTH Magistrate\'s Archives';
	10203: 'Custom KOTH_TradeDistrict';
	487: 'Custom S_ShatteredDesert';
	483: 'Custom O_Marauders Port';
	485: 'Custom S_WardersGate';
	10201: 'Custom KOTH_Snowfall Junction';
	10202: 'Custom KOTH_Marauders Port';
	10224: 'Custom S_Undercity';
	10218: 'Custom S_Crossing';
	10217: 'Custom S_BogDistrict';
	10225: 'Custom S_Waterway';
	10222: 'Custom S_SandBridge';
	10219: 'Custom S_EastWatch';
	10223: 'Custom S_Sierra';
	10221: 'Custom S_Salt';
	10220: 'Custom S_MossGarden';
}

export type PaladinQueueId = keyof PaladinQueues

//

export interface RealmRoyaleQueues {
	474: 'Solo';
	475: 'Duo';
	476: 'Quad';
}

export type RealmRoyaleQueueId = keyof RealmRoyaleQueues

export type RealmRoyaleQueueName = RealmRoyaleQueues[keyof RealmRoyaleQueues]