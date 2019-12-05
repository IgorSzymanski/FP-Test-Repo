import { ExtraData } from '~/library/storage/storage.factory'
import { IPokemon } from '../pokemon.interface'

export const PokemonEncounters: ExtraData<IPokemon, 'encounters'> = {
	caterpie: [
		{
			locationArea: 'kanto-route-2-south-towards-viridian-city',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	metapod: [
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	weedle: [
		{
			locationArea: 'kanto-route-2-south-towards-viridian-city',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	kakuna: [
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	pidgey: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-1-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-1-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-2-south-towards-viridian-city',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-2-south-towards-viridian-city',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-3-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-3-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-5-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-5-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	pidgeotto: [
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	rattata: [
		{
			locationArea: 'kanto-route-1-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-1-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-2-south-towards-viridian-city',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-2-south-towards-viridian-city',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-4-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-4-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-9-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-9-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	raticate: [
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	spearow: [
		{
			locationArea: 'kanto-route-3-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-3-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-4-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-4-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-9-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-9-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	fearow: [
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	ekans: [
		{
			locationArea: 'kanto-route-4-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-9-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	arbok: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 57,
					maxLevel: 57,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	pikachu: [
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-forest-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	raichu: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 53,
					maxLevel: 53,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 53,
					maxLevel: 53,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 64,
					maxLevel: 64,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 64,
					maxLevel: 64,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	sandshrew: [
		{
			locationArea: 'kanto-route-4-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-9-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	sandslash: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 57,
					maxLevel: 57,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	'nidoran-f': [
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	nidorina: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	'nidoran-m': [
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 2,
					maxLevel: 2,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 4,
					maxLevel: 4,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	nidorino: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	clefairy: [
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	vulpix: [
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	jigglypuff: [
		{
			locationArea: 'kanto-route-3-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-3-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 3,
					maxLevel: 3,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 5,
					maxLevel: 5,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	wigglytuff: [
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 54,
					maxLevel: 54,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 54,
					maxLevel: 54,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	zubat: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 6,
					maxLevel: 6,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	golbat: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 46,
					maxLevel: 46,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 46,
					maxLevel: 46,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	oddish: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-5-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	gloom: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	paras: [
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	parasect: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 64,
					maxLevel: 64,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 64,
					maxLevel: 64,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	venonat: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	venomoth: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 49,
					maxLevel: 49,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 49,
					maxLevel: 49,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 51,
					maxLevel: 51,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 51,
					maxLevel: 51,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	diglett: [
		{
			locationArea: 'digletts-cave-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'digletts-cave-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	dugtrio: [
		{
			locationArea: 'digletts-cave-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'digletts-cave-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	meowth: [
		{
			locationArea: 'kanto-route-5-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	psyduck: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	golduck: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	mankey: [
		{
			locationArea: 'kanto-route-5-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	growlithe: [
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-8-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	poliwag: [
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
	],
	poliwhirl: [
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	abra: [
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	kadabra: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 49,
					maxLevel: 49,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 49,
					maxLevel: 49,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 51,
					maxLevel: 51,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 51,
					maxLevel: 51,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	machop: [
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	machoke: [
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 45,
					maxLevel: 45,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 45,
					maxLevel: 45,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	bellsprout: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-5-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-7-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 12,
					maxLevel: 12,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	weepinbell: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	tentacool: [
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'surf',
				},
				{
					chance: 4,
					minLevel: 35,
					maxLevel: 35,
					method: 'surf',
				},
				{
					chance: 1,
					minLevel: 40,
					maxLevel: 40,
					method: 'surf',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'surf',
				},
				{
					chance: 4,
					minLevel: 35,
					maxLevel: 35,
					method: 'surf',
				},
				{
					chance: 1,
					minLevel: 40,
					maxLevel: 40,
					method: 'surf',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'surf',
				},
				{
					chance: 4,
					minLevel: 35,
					maxLevel: 35,
					method: 'surf',
				},
				{
					chance: 1,
					minLevel: 40,
					maxLevel: 40,
					method: 'surf',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'surf',
				},
				{
					chance: 4,
					minLevel: 35,
					maxLevel: 35,
					method: 'surf',
				},
				{
					chance: 1,
					minLevel: 40,
					maxLevel: 40,
					method: 'surf',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 5,
					maxLevel: 5,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'surf',
				},
				{
					chance: 4,
					minLevel: 35,
					maxLevel: 35,
					method: 'surf',
				},
				{
					chance: 1,
					minLevel: 40,
					maxLevel: 40,
					method: 'surf',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 20,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 15,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 5,
					maxLevel: 5,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'surf',
				},
				{
					chance: 10,
					minLevel: 15,
					maxLevel: 15,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'surf',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'surf',
				},
				{
					chance: 4,
					minLevel: 35,
					maxLevel: 35,
					method: 'surf',
				},
				{
					chance: 1,
					minLevel: 40,
					maxLevel: 40,
					method: 'surf',
				},
			],
			version: 'blue',
		},
	],
	geodude: [
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 7,
					maxLevel: 7,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 8,
					maxLevel: 8,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'mt-moon-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 10,
					maxLevel: 10,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	graveler: [
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 41,
					maxLevel: 41,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	ponyta: [
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	slowpoke: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	slowbro: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	magnemite: [
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	magneton: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 46,
					maxLevel: 46,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 46,
					maxLevel: 46,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	doduo: [
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-16-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	dodrio: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 49,
					maxLevel: 49,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 49,
					maxLevel: 49,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 51,
					maxLevel: 51,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 51,
					maxLevel: 51,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	seel: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	dewgong: [
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	grimer: [
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	muk: [
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	shellder: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	gastly: [
		{
			locationArea: 'pokemon-tower-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-4f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-4f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-5f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-5f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 18,
					maxLevel: 18,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-6f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-6f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 19,
					maxLevel: 19,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-7f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-7f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	haunter: [
		{
			locationArea: 'pokemon-tower-3f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-3f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-4f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-4f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-5f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-5f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-6f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-6f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-7f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-7f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	onix: [
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'rock-tunnel-b2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 45,
					maxLevel: 45,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 45,
					maxLevel: 45,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	drowzee: [
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 9,
					maxLevel: 9,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 13,
					maxLevel: 13,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 11,
					maxLevel: 11,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 15,
					maxLevel: 15,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	hypno: [
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 46,
					maxLevel: 46,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 46,
					maxLevel: 46,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	krabby: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	kingler: [
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	voltorb: [
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 16,
					maxLevel: 16,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 14,
					maxLevel: 14,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 17,
					maxLevel: 17,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 21,
					maxLevel: 21,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	electrode: [
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	exeggcute: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 27,
					maxLevel: 27,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	cubone: [
		{
			locationArea: 'pokemon-tower-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-4f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-4f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-5f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-5f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 20,
					maxLevel: 20,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-6f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-6f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-tower-7f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-tower-7f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 22,
					maxLevel: 22,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 24,
					maxLevel: 24,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	marowak: [
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-victory-road-2-2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	koffing: [
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 35,
					maxLevel: 35,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	weezing: [
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-2f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 40,
					maxLevel: 40,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 42,
					maxLevel: 42,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	rhyhorn: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	rhydon: [
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 52,
					maxLevel: 52,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	chansey: [
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 56,
					maxLevel: 56,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 56,
					maxLevel: 56,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 64,
					maxLevel: 64,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 64,
					maxLevel: 64,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	tangela: [
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	kangaskhan: [
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	horsea: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 15,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	seadra: [
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 37,
					maxLevel: 37,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 39,
					maxLevel: 39,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	goldeen: [
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 8,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 50,
					minLevel: 10,
					maxLevel: 10,
					method: 'good-rod',
				},
			],
			version: 'blue',
		},
	],
	seaking: [
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 8,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
				{
					chance: 17,
					minLevel: 23,
					maxLevel: 23,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	staryu: [
		{
			locationArea: 'seafoam-islands-1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b1f',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 32,
					maxLevel: 32,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 30,
					maxLevel: 30,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b2f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 29,
					maxLevel: 29,
					method: 'walk',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 31,
					maxLevel: 31,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
	scyther: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	electabuzz: [
		{
			locationArea: 'power-plant-area',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 36,
					maxLevel: 36,
					method: 'walk',
				},
			],
			version: 'red',
		},
	],
	magmar: [
		{
			locationArea: 'pokemon-mansion-3f',
			encounterDetails: [
				{
					chance: 10,
					minLevel: 34,
					maxLevel: 34,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pokemon-mansion-b1f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	pinsir: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	tauros: [
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 28,
					maxLevel: 28,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	magikarp: [
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b3f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'seafoam-islands-b4f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-12-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-19-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-20-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cinnabar-island-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'viridian-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'celadon-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'fuchsia-city-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'pallet-town-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-6-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-10-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-11-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-17-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-18-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-sea-route-21-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-22-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-24-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-25-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'vermilion-city-ss-anne-dock',
			encounterDetails: [
				{
					chance: 100,
					minLevel: 5,
					maxLevel: 5,
					method: 'old-rod',
				},
			],
			version: 'blue',
		},
	],
	ditto: [
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-13-area',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 25,
					maxLevel: 25,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-14-area',
			encounterDetails: [
				{
					chance: 15,
					minLevel: 23,
					maxLevel: 23,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-15-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 26,
					maxLevel: 26,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 53,
					maxLevel: 53,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-1f',
			encounterDetails: [
				{
					chance: 1,
					minLevel: 53,
					maxLevel: 53,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 60,
					maxLevel: 60,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-2f',
			encounterDetails: [
				{
					chance: 4,
					minLevel: 55,
					maxLevel: 55,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 60,
					maxLevel: 60,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 65,
					maxLevel: 65,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 63,
					maxLevel: 63,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 67,
					maxLevel: 67,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'cerulean-cave-b1f',
			encounterDetails: [
				{
					chance: 5,
					minLevel: 65,
					maxLevel: 65,
					method: 'walk',
				},
				{
					chance: 4,
					minLevel: 63,
					maxLevel: 63,
					method: 'walk',
				},
				{
					chance: 1,
					minLevel: 67,
					maxLevel: 67,
					method: 'walk',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-route-23-area',
			encounterDetails: [
				{
					chance: 20,
					minLevel: 33,
					maxLevel: 33,
					method: 'walk',
				},
				{
					chance: 10,
					minLevel: 38,
					maxLevel: 38,
					method: 'walk',
				},
				{
					chance: 5,
					minLevel: 43,
					maxLevel: 43,
					method: 'walk',
				},
			],
			version: 'blue',
		},
	],
	dratini: [
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-middle',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-1-east',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-2-north',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'red',
		},
		{
			locationArea: 'kanto-safari-zone-area-3-west',
			encounterDetails: [
				{
					chance: 25,
					minLevel: 15,
					maxLevel: 15,
					method: 'super-rod',
				},
			],
			version: 'blue',
		},
	],
}
