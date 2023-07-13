// https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff

export type TableProps = {
  headers: any[];
  rows: any[];
}

export function Table(props: TableProps) {
  const { headers, rows } = props;
  console.log(rows);

  return (
    <>
      <table className="w-full rounded border text-left text-sm text-gray-500">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            {
              headers.map((header, i) => {
                return (
                  <th scope="col" className="px-6 py-3 text-lg" key={`header-${i}`}>
                    {header}
                  </th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, i) => {
              return (
                <tr key={`row-${i}`} className="border-b even:bg-gray-50">
                  <td className="px-6 py-4 capitalize">{row.name}</td>
                  <td>placeholder type</td>
                </tr>
              );
            })
          }

        </tbody>
      </table>
      <div className="mt-8 flex items-center justify-center">
        <button className="rounded border bg-gray-200 px-2 py-1">Load more</button>
      </div>
    </>
  );
}