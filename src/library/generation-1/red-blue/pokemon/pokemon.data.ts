import { map } from 'ramda'
import { Collection, CollectionInit } from '~/library/storage/storage.factory'
import { IPokemon } from './pokemon.interface'
import { PokemonIds } from './pokemon.indices'
import { PokemonHeight } from './data/pokemon.height'
import { PokemonWeight } from './data/pokemon.weight'
import { PokemonNumber } from './data/pokemon.number'
import { PokemonEvolutions } from './data/pokemon.evolutions'
import { PokemonBaseStats } from './data/pokemon.base-stats'
import { PokemonStatus } from './data/pokemon.status'
import { PokemonTypes } from './data/pokemon.types'
import { PokemonBaseEXP } from './data/pokemon.base-exp'
import { PokemonGrowthRate } from './data/pokemon.growth-rate'
import { PokemonCatchRate } from './data/pokemon.catch-rate'
import { PokemonMoves } from './data/pokemon.moves'
import { PokemonMachineMoves } from './data/pokemon.machine-moves'
import { PokemonColour } from './data/pokemon.colour'
import { PokemonIcon } from './data/pokemon.icon'
import { PokemonIndex } from './data/pokemon.index'
import { PokemonEncounters } from './data/pokemon.encounters'

export const PokemonData = Collection<IPokemon>([
	map(({ id }) => ({
		id,
		number: PokemonNumber[id],
		index: PokemonIndex[id],
		types: PokemonTypes[id],
		height: PokemonHeight[id],
		weight: PokemonWeight[id],
		status: PokemonStatus[id],
		baseEXP: PokemonBaseEXP[id],
		catchRate: PokemonCatchRate[id],
		growthRate: PokemonGrowthRate[id],
		colour: PokemonColour[id],
		icon: PokemonIcon[id],
		baseStats: PokemonBaseStats[id],
		effortValues: PokemonBaseStats[id],
		evolutions: PokemonEvolutions[id],
		moves: PokemonMoves[id],
		machineMoves: PokemonMachineMoves[id],
		encounters: PokemonEncounters[id],
	})),
])(CollectionInit(PokemonIds))

// 	map((_pokemon) => ({
// 		..._pokemon,
// 		// effortValues: pokemon.baseStats,
// 		// artwork: {
// 		// 	src: `library/pokemon/artworks/regular/RB/250px/${pokemon.id}.png`,
// 		// 	height: 250,
// 		// 	width: 250,
// 		// },
// 		// thumbnail: {
// 		// 	src: `library/pokemon/artworks/regular/RB/100px/${pokemon.id}.png`,
// 		// 	height: 100,
// 		// 	width: 100,
// 		// },
// 		// icon: {
// 		// 	src: `library/pokemon/artworks/regular/RB/32px/${pokemon.id}.png`,
// 		// 	height: 32,
// 		// 	width: 32,
// 		// },
// 		// icon: pokemon.icon
// 		// 	? {
// 		// 			src: `library/pokemon/icons/RB/${pokemon.icon.src}.png`,
// 		// 			height: 16,
// 		// 			width: 16,
// 		// 	  }
// 		// 	: undefined,
// 	})),
// 	// addEvolutionRoots,
// 	// addPreevolutions,
// 	// map(applyNameStorage([PokemonEnglishNames, PokemonJapaneseNames])),
// ])([])

// console.log(PokemonData())

// require('fs').writeFile("pokemon.base-exp.json", JSON.stringify(StorageToData(PokemonData)(p => p.baseEXP)), function(err: any) {

//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// });

// PokemonData.forEach(p => console.log(p.names))

// export const PokemonData = PokemonStorage([])
