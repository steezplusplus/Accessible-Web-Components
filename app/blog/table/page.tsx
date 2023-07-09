import { getPokemon } from './_api/api';
import { Table } from './_components/Table';

export const metadata = {
  title: 'Steez++ | Table',
  description: 'Supporting resources to make the web accessible',
};

const headers = ['Band', 'Singer', 'Inception', 'Label'];

const rows = [
  ['Napalm Death', 'Barney Greenway', '1981', 'Century Media'],
  ['Carcass', 'Jeff Walker', '1985', 'Earache'],
  ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'],
  ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']
];

// TODO Loading, error fallbacks
export default async function Page() {
  const pokemon = await getPokemon();
  console.log(pokemon); // TODO show pokemon

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
        <Table rows={rows} headers={headers} />
      </div>
    </>
  );
}