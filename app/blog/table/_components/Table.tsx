// https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff

export type TableProps = {
  headers: any[];
  rows: any[];
}

export function Table(props: TableProps) {
  const { headers, rows } = props;
  console.log(rows);

  return (
    <table>
      <thead className="text-3xl">
        <tr>
          {headers.map((header, i) =>
            <th scope="col" key={i}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((cell, i) =>
          <tr key={i}>
            <td key={i}>{cell.name}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}