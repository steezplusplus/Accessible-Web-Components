export function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-900 to-emerald-500">
      <ul className="flex flex-col gap-y-2 p-8">
        <li>
          <h1 className="text-7xl leading-tight text-white">Blog</h1>
        </li>
        <li>
          <h2 className="text-white">Learn a11y and frontend dev with these articles</h2>
        </li>
      </ul>
    </header>
  );
}