const api = 'https://pokeapi.co/api/v2/';

export type PokemonMetadata = {
  count: number
  next: string
  previous: any
  results: Pokemon[]
}

export type Pokemon = {
  name: string
  url: string
}

export type GetPokemonProps = {
  limit?: number;
  offset?: number;
}

export function preload(props: GetPokemonProps) {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  const { limit = 20, offset = 0 } = props;
  void getPokemon({ limit, offset });
}

export async function getPokemon(props: GetPokemonProps): Promise<PokemonMetadata> {
  const { limit = 20, offset = 0 } = props;
  const res = await fetch(`${api}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) {
    // TODO This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}