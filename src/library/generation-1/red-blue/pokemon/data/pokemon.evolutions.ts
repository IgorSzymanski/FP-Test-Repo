import { ExtraData } from '~/library/storage/storage.factory'
import { IPokemon } from '../pokemon.interface'

export const PokemonEvolutions: ExtraData<IPokemon, 'evolutions'> = {
	bulbasaur: [
		{
			pokemon: 'ivysaur',
			conditions: [
				{
					method: 'level',
					level: 16,
				},
			],
		},
	],
	ivysaur: [
		{
			pokemon: 'venusaur',
			conditions: [
				{
					method: 'level',
					level: 32,
				},
			],
		},
	],
	charmander: [
		{
			pokemon: 'charmeleon',
			conditions: [
				{
					method: 'level',
					level: 16,
				},
			],
		},
	],
	charmeleon: [
		{
			pokemon: 'charizard',
			conditions: [
				{
					method: 'level',
					level: 36,
				},
			],
		},
	],
	squirtle: [
		{
			pokemon: 'wartortle',
			conditions: [
				{
					method: 'level',
					level: 16,
				},
			],
		},
	],
	wartortle: [
		{
			pokemon: 'blastoise',
			conditions: [
				{
					method: 'level',
					level: 36,
				},
			],
		},
	],
	caterpie: [
		{
			pokemon: 'metapod',
			conditions: [
				{
					method: 'level',
					level: 7,
				},
			],
		},
	],
	metapod: [
		{
			pokemon: 'butterfree',
			conditions: [
				{
					method: 'level',
					level: 10,
				},
			],
		},
	],
	weedle: [
		{
			pokemon: 'kakuna',
			conditions: [
				{
					method: 'level',
					level: 7,
				},
			],
		},
	],
	kakuna: [
		{
			pokemon: 'beedrill',
			conditions: [
				{
					method: 'level',
					level: 10,
				},
			],
		},
	],
	pidgey: [
		{
			pokemon: 'pidgeotto',
			conditions: [
				{
					method: 'level',
					level: 18,
				},
			],
		},
	],
	pidgeotto: [
		{
			pokemon: 'pidgeot',
			conditions: [
				{
					method: 'level',
					level: 36,
				},
			],
		},
	],
	rattata: [
		{
			pokemon: 'raticate',
			conditions: [
				{
					method: 'level',
					level: 20,
				},
			],
		},
	],
	spearow: [
		{
			pokemon: 'fearow',
			conditions: [
				{
					method: 'level',
					level: 20,
				},
			],
		},
	],
	ekans: [
		{
			pokemon: 'arbok',
			conditions: [
				{
					method: 'level',
					level: 22,
				},
			],
		},
	],
	pikachu: [
		{
			pokemon: 'raichu',
			conditions: [
				{
					method: 'item',
					item: 'thunder-stone',
				},
			],
		},
	],
	sandshrew: [
		{
			pokemon: 'sandslash',
			conditions: [
				{
					method: 'level',
					level: 22,
				},
			],
		},
	],
	'nidoran-f': [
		{
			pokemon: 'nidorina',
			conditions: [
				{
					method: 'level',
					level: 16,
				},
			],
		},
	],
	nidorina: [
		{
			pokemon: 'nidoqueen',
			conditions: [
				{
					method: 'item',
					item: 'moon-stone',
				},
			],
		},
	],
	'nidoran-m': [
		{
			pokemon: 'nidorino',
			conditions: [
				{
					method: 'level',
					level: 16,
				},
			],
		},
	],
	nidorino: [
		{
			pokemon: 'nidoking',
			conditions: [
				{
					method: 'item',
					item: 'moon-stone',
				},
			],
		},
	],
	clefairy: [
		{
			pokemon: 'clefable',
			conditions: [
				{
					method: 'item',
					item: 'moon-stone',
				},
			],
		},
	],
	vulpix: [
		{
			pokemon: 'ninetales',
			conditions: [
				{
					method: 'item',
					item: 'fire-stone',
				},
			],
		},
	],
	jigglypuff: [
		{
			pokemon: 'wigglytuff',
			conditions: [
				{
					method: 'item',
					item: 'moon-stone',
				},
			],
		},
	],
	zubat: [
		{
			pokemon: 'golbat',
			conditions: [
				{
					method: 'level',
					level: 22,
				},
			],
		},
	],
	oddish: [
		{
			pokemon: 'gloom',
			conditions: [
				{
					method: 'level',
					level: 21,
				},
			],
		},
	],
	gloom: [
		{
			pokemon: 'vileplume',
			conditions: [
				{
					method: 'item',
					item: 'leaf-stone',
				},
			],
		},
	],
	paras: [
		{
			pokemon: 'parasect',
			conditions: [
				{
					method: 'level',
					level: 24,
				},
			],
		},
	],
	venonat: [
		{
			pokemon: 'venomoth',
			conditions: [
				{
					method: 'level',
					level: 31,
				},
			],
		},
	],
	diglett: [
		{
			pokemon: 'dugtrio',
			conditions: [
				{
					method: 'level',
					level: 26,
				},
			],
		},
	],
	meowth: [
		{
			pokemon: 'persian',
			conditions: [
				{
					method: 'level',
					level: 28,
				},
			],
		},
	],
	psyduck: [
		{
			pokemon: 'golduck',
			conditions: [
				{
					method: 'level',
					level: 33,
				},
			],
		},
	],
	mankey: [
		{
			pokemon: 'primeape',
			conditions: [
				{
					method: 'level',
					level: 28,
				},
			],
		},
	],
	growlithe: [
		{
			pokemon: 'arcanine',
			conditions: [
				{
					method: 'item',
					item: 'fire-stone',
				},
			],
		},
	],
	poliwag: [
		{
			pokemon: 'poliwhirl',
			conditions: [
				{
					method: 'level',
					level: 25,
				},
			],
		},
	],
	poliwhirl: [
		{
			pokemon: 'poliwrath',
			conditions: [
				{
					method: 'item',
					item: 'water-stone',
				},
			],
		},
	],
	abra: [
		{
			pokemon: 'kadabra',
			conditions: [
				{
					method: 'level',
					level: 16,
				},
			],
		},
	],
	kadabra: [
		{
			pokemon: 'alakazam',
			conditions: [
				{
					method: 'trade',
				},
			],
		},
	],
	machop: [
		{
			pokemon: 'machoke',
			conditions: [
				{
					method: 'level',
					level: 28,
				},
			],
		},
	],
	machoke: [
		{
			pokemon: 'machamp',
			conditions: [
				{
					method: 'trade',
				},
			],
		},
	],
	bellsprout: [
		{
			pokemon: 'weepinbell',
			conditions: [
				{
					method: 'level',
					level: 21,
				},
			],
		},
	],
	weepinbell: [
		{
			pokemon: 'victreebel',
			conditions: [
				{
					method: 'item',
					item: 'leaf-stone',
				},
			],
		},
	],
	tentacool: [
		{
			pokemon: 'tentacruel',
			conditions: [
				{
					method: 'level',
					level: 30,
				},
			],
		},
	],
	geodude: [
		{
			pokemon: 'graveler',
			conditions: [
				{
					method: 'level',
					level: 25,
				},
			],
		},
	],
	graveler: [
		{
			pokemon: 'golem',
			conditions: [
				{
					method: 'trade',
				},
			],
		},
	],
	ponyta: [
		{
			pokemon: 'rapidash',
			conditions: [
				{
					method: 'level',
					level: 40,
				},
			],
		},
	],
	slowpoke: [
		{
			pokemon: 'slowbro',
			conditions: [
				{
					method: 'level',
					level: 37,
				},
			],
		},
	],
	magnemite: [
		{
			pokemon: 'magneton',
			conditions: [
				{
					method: 'level',
					level: 30,
				},
			],
		},
	],
	doduo: [
		{
			pokemon: 'dodrio',
			conditions: [
				{
					method: 'level',
					level: 31,
				},
			],
		},
	],
	seel: [
		{
			pokemon: 'dewgong',
			conditions: [
				{
					method: 'level',
					level: 34,
				},
			],
		},
	],
	grimer: [
		{
			pokemon: 'muk',
			conditions: [
				{
					method: 'level',
					level: 38,
				},
			],
		},
	],
	shellder: [
		{
			pokemon: 'cloyster',
			conditions: [
				{
					method: 'item',
					item: 'water-stone',
				},
			],
		},
	],
	gastly: [
		{
			pokemon: 'haunter',
			conditions: [
				{
					method: 'level',
					level: 25,
				},
			],
		},
	],
	haunter: [
		{
			pokemon: 'gengar',
			conditions: [
				{
					method: 'trade',
				},
			],
		},
	],
	drowzee: [
		{
			pokemon: 'hypno',
			conditions: [
				{
					method: 'level',
					level: 26,
				},
			],
		},
	],
	krabby: [
		{
			pokemon: 'kingler',
			conditions: [
				{
					method: 'level',
					level: 28,
				},
			],
		},
	],
	voltorb: [
		{
			pokemon: 'electrode',
			conditions: [
				{
					method: 'level',
					level: 30,
				},
			],
		},
	],
	exeggcute: [
		{
			pokemon: 'exeggutor',
			conditions: [
				{
					method: 'item',
					item: 'leaf-stone',
				},
			],
		},
	],
	cubone: [
		{
			pokemon: 'marowak',
			conditions: [
				{
					method: 'level',
					level: 28,
				},
			],
		},
	],
	koffing: [
		{
			pokemon: 'weezing',
			conditions: [
				{
					method: 'level',
					level: 35,
				},
			],
		},
	],
	rhyhorn: [
		{
			pokemon: 'rhydon',
			conditions: [
				{
					method: 'level',
					level: 42,
				},
			],
		},
	],
	horsea: [
		{
			pokemon: 'seadra',
			conditions: [
				{
					method: 'level',
					level: 32,
				},
			],
		},
	],
	goldeen: [
		{
			pokemon: 'seaking',
			conditions: [
				{
					method: 'level',
					level: 33,
				},
			],
		},
	],
	staryu: [
		{
			pokemon: 'starmie',
			conditions: [
				{
					method: 'item',
					item: 'water-stone',
				},
			],
		},
	],
	magikarp: [
		{
			pokemon: 'gyarados',
			conditions: [
				{
					method: 'level',
					level: 20,
				},
			],
		},
	],
	eevee: [
		{
			pokemon: 'vaporeon',
			conditions: [
				{
					method: 'item',
					item: 'water-stone',
				},
			],
		},
		{
			pokemon: 'jolteon',
			conditions: [
				{
					method: 'item',
					item: 'thunder-stone',
				},
			],
		},
		{
			pokemon: 'flareon',
			conditions: [
				{
					method: 'item',
					item: 'fire-stone',
				},
			],
		},
	],
	omanyte: [
		{
			pokemon: 'omastar',
			conditions: [
				{
					method: 'level',
					level: 40,
				},
			],
		},
	],
	kabuto: [
		{
			pokemon: 'kabutops',
			conditions: [
				{
					method: 'level',
					level: 40,
				},
			],
		},
	],
	dratini: [
		{
			pokemon: 'dragonair',
			conditions: [
				{
					method: 'level',
					level: 30,
				},
			],
		},
	],
	dragonair: [
		{
			pokemon: 'dragonite',
			conditions: [
				{
					method: 'level',
					level: 55,
				},
			],
		},
	],
}
