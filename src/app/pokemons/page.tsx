import {
  PokemonResponse,
  SimplePokemon,
  PokemonsGrid,
} from '@/components/pokemons';
import Link from 'next/link';

const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  //throw new Error('Esto es un error que no debería de suceder')
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col gap-5 p-7">
      <div className="bg-muted/50 rounded-xl p-7 grid">
        <h1 className="block text-2xl mb-3">
          ISR using{' '}
          <Link
            className="text-blue-300 hover:underline"
            href={'https://pokeapi.co'}
            target="_blank"
          >
            PokeAPI
          </Link>
        </h1>
        <p className="block">
          This example fetches the first 150 entries from the API result at{' '}
          <span>build time</span> in order to cache the response.
        </p>
        <p className="block">
          Client side performance will be benefits by using this technique;
          also, images are lazy loaded; it means, they&apos;re loaded when
          appears in client viewport.
        </p>
        <h2 className="block text-xl my-3">Endpoints:</h2>
        <div className="bg-muted/50 p-4 rounded-md">
          <ul className="font-mono">
            <li>
              <span>
                /pokemons<span className="font-light ml-2 text-xs">(current)</span>
              </span>
            </li>
            <li>/pokemon/{`{name}`}</li>
          </ul>
        </div>
      </div>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
