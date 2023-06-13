import Link from 'next/link';

export function Navbar() {
  return (
    <ul className="flex items-center border border-solid h-full px-1">
      <li>
        <Link href="/">
          <h1 className="text-2xl">Steez++</h1>
        </Link>
      </li>
      <div className="ml-auto">
        <li>
          <Link className="text-blue-800 hover:text-blue-900 hover:underline" href="/about">About</Link>
        </li>
      </div>
    </ul>
  );
}