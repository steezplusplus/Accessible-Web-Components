export type TableProps = {
  headers: any[];
  rows: any[];
}

export function Table(props: TableProps) {
  const { headers, rows } = props;

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) =>
            <th scope="col" key={i}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) =>
          <tr key={i}>
            {row.map((cell: any, i: number) =>
              <td key={i}>{cell}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}