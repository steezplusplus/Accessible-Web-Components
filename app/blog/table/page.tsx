import { getPokemon, preload } from './_api/api';
import { Table } from './_components/Table';

export const metadata = {
  title: 'Steez++ | Table',
  description: 'Supporting resources to make the web accessible',
};

const headers = ['Pokemon'];

// TODO Loading, error fallbacks
export default async function Page() {
  preload({});
  const pokemonMetadata = await getPokemon({});
  const pokemon = pokemonMetadata.results;

  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Table</h1>
          <p>
            Data tables are used to organize data with a logical relationship in grids.
          </p>
        </header>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <Table rows={pokemon} headers={headers} />
      </div>
    </>
  );
}