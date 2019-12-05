import { Storage, addUq } from '../../../storage/storage.factory'
import { IMove } from './move.interface'
import { MoveEnglishNames } from './names/move.en'
import { applyNameStorage } from '~/library/i18n/name.factory'
import { map } from 'ramda'
import { MoveJapaneseNames } from './names/move.ja'
import { assignCategoryByType } from './move.factory'
import { addType } from '../type/type.factory'
import { addDamageClass } from '../damage-class/damage-class.factory'
export const Move = (data: IMove): IMove => ({ ...data })

export const MoveData = Storage<IMove>([
	addUq(
		Move({
			id: 'pound',
			accuracy: 100,
			basePower: 40,
			powerPoints: 35,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'karate-chop',
			accuracy: 100,
			basePower: 50,
			powerPoints: 25,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'double-slap',
			accuracy: 85,
			basePower: 15,
			powerPoints: 10,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'comet-punch',
			accuracy: 85,
			basePower: 18,
			powerPoints: 15,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'mega-punch',
			accuracy: 85,
			basePower: 80,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'pay-day',
			accuracy: 100,
			basePower: 40,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'fire-punch',
			accuracy: 100,
			basePower: 75,
			powerPoints: 15,
			type: addType('fire'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'ice-punch',
			accuracy: 100,
			basePower: 75,
			powerPoints: 15,
			type: addType('ice'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'thunder-punch',
			accuracy: 100,
			basePower: 75,
			powerPoints: 15,
			type: addType('electric'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'scratch',
			accuracy: 100,
			basePower: 40,
			powerPoints: 35,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'vice-grip',
			accuracy: 100,
			basePower: 55,
			powerPoints: 30,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'guillotine',
			accuracy: 30,
			powerPoints: 5,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'razor-wind',
			accuracy: 75,
			basePower: 80,
			powerPoints: 10,
			type: addType('normal'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'swords-dance',
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'cut',
			accuracy: 95,
			basePower: 50,
			powerPoints: 30,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'gust',
			accuracy: 100,
			basePower: 40,
			powerPoints: 35,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'wing-attack',
			accuracy: 100,
			basePower: 35,
			powerPoints: 35,
			type: addType('flying'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'whirlwind',
			accuracy: 85,
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: -6,
		})
	),
	addUq(
		Move({
			id: 'fly',
			accuracy: 95,
			basePower: 70,
			powerPoints: 15,
			type: addType('flying'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bind',
			accuracy: 75,
			basePower: 15,
			powerPoints: 20,
			type: addType('normal'),
			effectRate: 100,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'slam',
			accuracy: 75,
			basePower: 80,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'vine-whip',
			accuracy: 100,
			basePower: 35,
			powerPoints: 10,
			type: addType('grass'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'stomp',
			accuracy: 100,
			basePower: 65,
			powerPoints: 20,
			type: addType('normal'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'double-kick',
			accuracy: 100,
			basePower: 30,
			powerPoints: 30,
			type: addType('fighting'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'mega-kick',
			accuracy: 75,
			basePower: 120,
			powerPoints: 5,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'jump-kick',
			accuracy: 95,
			basePower: 70,
			powerPoints: 25,
			type: addType('fighting'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'rolling-kick',
			accuracy: 85,
			basePower: 60,
			powerPoints: 15,
			type: addType('fighting'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'sand-attack',
			accuracy: 100,
			powerPoints: 15,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'headbutt',
			accuracy: 100,
			basePower: 70,
			powerPoints: 15,
			type: addType('normal'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'horn-attack',
			accuracy: 100,
			basePower: 65,
			powerPoints: 25,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'fury-attack',
			accuracy: 85,
			basePower: 15,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'horn-drill',
			accuracy: 30,
			powerPoints: 5,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'tackle',
			accuracy: 95,
			basePower: 35,
			powerPoints: 35,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'body-slam',
			accuracy: 100,
			basePower: 85,
			powerPoints: 15,
			type: addType('normal'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'wrap',
			accuracy: 85,
			basePower: 15,
			powerPoints: 20,
			type: addType('normal'),
			effectRate: 100,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'take-down',
			accuracy: 85,
			basePower: 90,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'thrash',
			accuracy: 100,
			basePower: 90,
			powerPoints: 20,
			type: addType('normal'),
			target: 'random-opponent',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'double-edge',
			accuracy: 100,
			basePower: 100,
			powerPoints: 15,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'tail-whip',
			accuracy: 100,
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'poison-sting',
			accuracy: 100,
			basePower: 15,
			powerPoints: 35,
			type: addType('poison'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'twineedle',
			accuracy: 100,
			basePower: 25,
			powerPoints: 20,
			type: addType('bug'),
			effectRate: 20,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'pin-missile',
			accuracy: 85,
			basePower: 14,
			powerPoints: 20,
			type: addType('bug'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'leer',
			accuracy: 100,
			powerPoints: 30,
			type: addType('normal'),
			effectRate: 100,
			damageClass: addDamageClass('status'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bite',
			accuracy: 100,
			basePower: 60,
			powerPoints: 25,
			type: addType('normal'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'growl',
			accuracy: 100,
			powerPoints: 40,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'roar',
			accuracy: 100,
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: -6,
		})
	),
	addUq(
		Move({
			id: 'sing',
			accuracy: 55,
			powerPoints: 15,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'supersonic',
			accuracy: 55,
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'sonic-boom',
			accuracy: 90,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'disable',
			accuracy: 55,
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'acid',
			accuracy: 100,
			basePower: 40,
			powerPoints: 30,
			type: addType('poison'),
			effectRate: 10,
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'ember',
			accuracy: 100,
			basePower: 40,
			powerPoints: 25,
			type: addType('fire'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'flamethrower',
			accuracy: 100,
			basePower: 95,
			powerPoints: 15,
			type: addType('fire'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'mist',
			powerPoints: 30,
			type: addType('ice'),
			damageClass: addDamageClass('status'),
			target: 'users-field',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'water-gun',
			accuracy: 100,
			basePower: 40,
			powerPoints: 25,
			type: addType('water'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'hydro-pump',
			accuracy: 80,
			basePower: 120,
			powerPoints: 5,
			type: addType('water'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'surf',
			accuracy: 100,
			basePower: 95,
			powerPoints: 15,
			type: addType('water'),
			target: 'all-other-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'ice-beam',
			accuracy: 100,
			basePower: 95,
			powerPoints: 10,
			type: addType('ice'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'blizzard',
			accuracy: 90,
			basePower: 120,
			powerPoints: 5,
			type: addType('ice'),
			effectRate: 10,
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'psybeam',
			accuracy: 100,
			basePower: 65,
			powerPoints: 20,
			type: addType('psychic'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bubble-beam',
			accuracy: 100,
			basePower: 65,
			powerPoints: 20,
			type: addType('water'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'aurora-beam',
			accuracy: 100,
			basePower: 65,
			powerPoints: 20,
			type: addType('ice'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'hyper-beam',
			accuracy: 90,
			basePower: 150,
			powerPoints: 5,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'peck',
			accuracy: 100,
			basePower: 35,
			powerPoints: 35,
			type: addType('flying'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'drill-peck',
			accuracy: 100,
			basePower: 80,
			powerPoints: 20,
			type: addType('flying'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'submission',
			accuracy: 80,
			basePower: 80,
			powerPoints: 25,
			type: addType('fighting'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'low-kick',
			accuracy: 90,
			basePower: 50,
			powerPoints: 20,
			type: addType('fighting'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'counter',
			accuracy: 100,
			powerPoints: 20,
			type: addType('fighting'),
			target: 'specific-move',
			speedPriority: -5,
		})
	),
	addUq(
		Move({
			id: 'seismic-toss',
			accuracy: 100,
			powerPoints: 20,
			type: addType('fighting'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'strength',
			accuracy: 100,
			basePower: 80,
			powerPoints: 15,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'absorb',
			accuracy: 100,
			basePower: 20,
			powerPoints: 20,
			type: addType('grass'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'mega-drain',
			accuracy: 100,
			basePower: 40,
			powerPoints: 10,
			type: addType('grass'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'leech-seed',
			accuracy: 90,
			powerPoints: 10,
			type: addType('grass'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'growth',
			powerPoints: 40,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'razor-leaf',
			accuracy: 95,
			basePower: 55,
			powerPoints: 25,
			type: addType('grass'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'solar-beam',
			accuracy: 100,
			basePower: 120,
			powerPoints: 10,
			type: addType('grass'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'poison-powder',
			accuracy: 75,
			powerPoints: 35,
			type: addType('poison'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'stun-spore',
			accuracy: 75,
			powerPoints: 30,
			type: addType('grass'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'sleep-powder',
			accuracy: 75,
			powerPoints: 15,
			type: addType('grass'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'petal-dance',
			accuracy: 100,
			basePower: 70,
			powerPoints: 20,
			type: addType('grass'),
			target: 'random-opponent',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'string-shot',
			accuracy: 95,
			powerPoints: 40,
			type: addType('bug'),
			damageClass: addDamageClass('status'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'dragon-rage',
			accuracy: 100,
			powerPoints: 10,
			type: addType('dragon'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'fire-spin',
			accuracy: 70,
			basePower: 15,
			powerPoints: 15,
			type: addType('fire'),
			effectRate: 100,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'thunder-shock',
			accuracy: 100,
			basePower: 40,
			powerPoints: 30,
			type: addType('electric'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'thunderbolt',
			accuracy: 100,
			basePower: 95,
			powerPoints: 15,
			type: addType('electric'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'thunder-wave',
			accuracy: 100,
			powerPoints: 20,
			type: addType('electric'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'thunder',
			accuracy: 70,
			basePower: 120,
			powerPoints: 10,
			type: addType('electric'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'rock-throw',
			accuracy: 65,
			basePower: 50,
			powerPoints: 15,
			type: addType('rock'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'earthquake',
			accuracy: 100,
			basePower: 100,
			powerPoints: 10,
			type: addType('ground'),
			target: 'all-other-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'fissure',
			accuracy: 30,
			powerPoints: 5,
			type: addType('ground'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'dig',
			accuracy: 100,
			basePower: 100,
			powerPoints: 10,
			type: addType('ground'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'toxic',
			accuracy: 85,
			powerPoints: 10,
			type: addType('poison'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'confusion',
			accuracy: 100,
			basePower: 50,
			powerPoints: 25,
			type: addType('psychic'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'psychic',
			accuracy: 100,
			basePower: 90,
			powerPoints: 10,
			type: addType('psychic'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'hypnosis',
			accuracy: 70,
			powerPoints: 20,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'meditate',
			powerPoints: 40,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'agility',
			powerPoints: 30,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'quick-attack',
			accuracy: 100,
			basePower: 40,
			powerPoints: 30,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 1,
		})
	),
	addUq(
		Move({
			id: 'rage',
			accuracy: 100,
			basePower: 20,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'teleport',
			powerPoints: 20,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'night-shade',
			accuracy: 100,
			powerPoints: 15,
			type: addType('ghost'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'mimic',
			accuracy: 100,
			powerPoints: 10,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'screech',
			accuracy: 85,
			powerPoints: 40,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'double-team',
			powerPoints: 15,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'recover',
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'harden',
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'minimize',
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'smokescreen',
			accuracy: 100,
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'confuse-ray',
			accuracy: 100,
			powerPoints: 10,
			type: addType('ghost'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'withdraw',
			powerPoints: 40,
			type: addType('water'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'defense-curl',
			powerPoints: 40,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'barrier',
			powerPoints: 30,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'light-screen',
			powerPoints: 30,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'users-field',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'haze',
			powerPoints: 30,
			type: addType('ice'),
			damageClass: addDamageClass('status'),
			target: 'entire-field',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'reflect',
			powerPoints: 20,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'users-field',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'focus-energy',
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bide',
			accuracy: 100,
			powerPoints: 10,
			type: addType('normal'),
			target: 'user',
			speedPriority: 1,
		})
	),
	addUq(
		Move({
			id: 'metronome',
			powerPoints: 10,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'mirror-move',
			powerPoints: 20,
			type: addType('flying'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'self-destruct',
			accuracy: 100,
			basePower: 130,
			powerPoints: 5,
			type: addType('normal'),
			target: 'all-other-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'egg-bomb',
			accuracy: 75,
			basePower: 100,
			powerPoints: 10,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'lick',
			accuracy: 100,
			basePower: 20,
			powerPoints: 30,
			type: addType('ghost'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'smog',
			accuracy: 70,
			basePower: 20,
			powerPoints: 20,
			type: addType('poison'),
			effectRate: 40,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'sludge',
			accuracy: 100,
			basePower: 65,
			powerPoints: 20,
			type: addType('poison'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bone-club',
			accuracy: 85,
			basePower: 65,
			powerPoints: 20,
			type: addType('ground'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'fire-blast',
			accuracy: 85,
			basePower: 120,
			powerPoints: 5,
			type: addType('fire'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'waterfall',
			accuracy: 100,
			basePower: 80,
			powerPoints: 15,
			type: addType('water'),
			effectRate: 20,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'clamp',
			accuracy: 75,
			basePower: 35,
			powerPoints: 10,
			type: addType('water'),
			effectRate: 100,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'swift',
			basePower: 60,
			powerPoints: 20,
			type: addType('normal'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'skull-bash',
			accuracy: 100,
			basePower: 100,
			powerPoints: 15,
			type: addType('normal'),
			effectRate: 100,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'spike-cannon',
			accuracy: 100,
			basePower: 20,
			powerPoints: 15,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'constrict',
			accuracy: 100,
			basePower: 10,
			powerPoints: 35,
			type: addType('normal'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'amnesia',
			powerPoints: 20,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'kinesis',
			accuracy: 80,
			powerPoints: 15,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'soft-boiled',
			powerPoints: 10,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'high-jump-kick',
			accuracy: 90,
			basePower: 85,
			powerPoints: 20,
			type: addType('fighting'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'glare',
			accuracy: 75,
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'dream-eater',
			accuracy: 100,
			basePower: 100,
			powerPoints: 15,
			type: addType('psychic'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'poison-gas',
			accuracy: 55,
			powerPoints: 40,
			type: addType('poison'),
			damageClass: addDamageClass('status'),
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'barrage',
			accuracy: 85,
			basePower: 15,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'leech-life',
			accuracy: 100,
			basePower: 20,
			powerPoints: 15,
			type: addType('bug'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'lovely-kiss',
			accuracy: 75,
			powerPoints: 10,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'sky-attack',
			accuracy: 90,
			basePower: 140,
			powerPoints: 5,
			type: addType('flying'),
			effectRate: 30,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'transform',
			powerPoints: 10,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bubble',
			accuracy: 100,
			basePower: 20,
			powerPoints: 30,
			type: addType('water'),
			effectRate: 10,
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'dizzy-punch',
			accuracy: 100,
			basePower: 70,
			powerPoints: 10,
			type: addType('normal'),
			effectRate: 20,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'spore',
			accuracy: 100,
			powerPoints: 15,
			type: addType('grass'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'flash',
			accuracy: 70,
			powerPoints: 20,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'psywave',
			accuracy: 80,
			powerPoints: 15,
			type: addType('psychic'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'splash',
			powerPoints: 40,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'acid-armor',
			powerPoints: 40,
			type: addType('poison'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'crabhammer',
			accuracy: 85,
			basePower: 90,
			powerPoints: 10,
			type: addType('water'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'explosion',
			accuracy: 100,
			basePower: 170,
			powerPoints: 5,
			type: addType('normal'),
			target: 'all-other-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'fury-swipes',
			accuracy: 80,
			basePower: 18,
			powerPoints: 15,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'bonemerang',
			accuracy: 90,
			basePower: 50,
			powerPoints: 10,
			type: addType('ground'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'rest',
			powerPoints: 10,
			type: addType('psychic'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'rock-slide',
			accuracy: 90,
			basePower: 75,
			powerPoints: 10,
			type: addType('rock'),
			effectRate: 30,
			target: 'all-opponents',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'hyper-fang',
			accuracy: 90,
			basePower: 80,
			powerPoints: 15,
			type: addType('normal'),
			effectRate: 10,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'sharpen',
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'conversion',
			powerPoints: 30,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'tri-attack',
			accuracy: 100,
			basePower: 80,
			powerPoints: 10,
			type: addType('normal'),
			effectRate: 20,
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'super-fang',
			accuracy: 90,
			powerPoints: 10,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'slash',
			accuracy: 100,
			basePower: 70,
			powerPoints: 20,
			type: addType('normal'),
			target: 'selected-pokemon',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'substitute',
			powerPoints: 10,
			type: addType('normal'),
			damageClass: addDamageClass('status'),
			target: 'user',
			speedPriority: 0,
		})
	),
	addUq(
		Move({
			id: 'struggle',
			accuracy: 100,
			basePower: 50,
			powerPoints: 10,
			type: addType('normal'),
			target: 'random-opponent',
			speedPriority: 0,
		})
	),
	map(applyNameStorage([MoveEnglishNames, MoveJapaneseNames])),
	//@ts-ignore
	map((move) => ({ ...move, damageClass: () => move?.type()?.damageClass() })),
	map(assignCategoryByType),
])([])
