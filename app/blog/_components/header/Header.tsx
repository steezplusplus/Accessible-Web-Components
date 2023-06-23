export function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-500 to-pink-500">
      <ul className="flex flex-col gap-y-8 p-8">
        <li>
          <h2 className="text-7xl leading-tight text-white">Blog</h2>
        </li>
        <li>
          <h3 className="text-white">Learn a11y and frontend dev with these articles</h3>
        </li>
      </ul>
    </header>
  );
}