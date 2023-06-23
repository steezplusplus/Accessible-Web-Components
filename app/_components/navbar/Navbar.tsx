import Link from 'next/link';

export function Navbar() {
  return (
    <ul className="flex h-full items-center bg-blue-500 px-5">
      <li>
        <Link className="group text-white transition duration-300" href="/">
          <h1 className="text-2xl text-white">
            Steez++
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-700 group-hover:max-w-full" />
          </h1>
        </Link>
      </li>
      <ul className="ml-auto flex items-center gap-x-6">
        <li>
          <Link className="group text-white transition duration-300" href="/blog">
            Blog
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-700 group-hover:max-w-full" />
          </Link>
        </li>
        <li>
          <Link className="group text-white transition duration-300" href="/about">
            About
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-700 group-hover:max-w-full" />
          </Link>
        </li>
      </ul>
    </ul>
  );
}