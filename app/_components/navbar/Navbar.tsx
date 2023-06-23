import Link from 'next/link';

export function Navbar() {
  return (
    <ul className="flex h-full items-center border border-solid px-1">
      <li>
        <Link href="/">
          <h1 className="text-2xl hover:underline">Steez++</h1>
        </Link>
      </li>
      <ul className="ml-auto flex items-center gap-x-2">
        <li>
          <Link className="text-blue-800 hover:text-blue-900 hover:underline" href="/blog">Blog</Link>
        </li>
        <li>
          <Link className="text-blue-800 hover:text-blue-900 hover:underline" href="/about">About</Link>
        </li>
      </ul>
    </ul>
  );
}