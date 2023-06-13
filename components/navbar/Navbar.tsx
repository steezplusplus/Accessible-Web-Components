import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border border-black px-2">
      <ul className="flex items-center">
        <li>
          <Link className="text-lg" href="/">Steez++</Link>
        </li>
        <div className="ml-auto">
          <li>
            <Link className="text-blue-800 hover:text-blue-900 hover:underline" href="/about">About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}