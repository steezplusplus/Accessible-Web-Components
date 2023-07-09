const api = 'https://pokeapi.co/api/v2/';

export interface PokemonMetadata {
  count: number
  next: string
  previous: any
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}


export async function getPokemon(): Promise<PokemonMetadata> {
  const res = await fetch(`${api}/pokemon?limit=3`);
  if (!res.ok) {
    // TODO This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}