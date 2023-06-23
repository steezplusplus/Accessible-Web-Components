import Link from 'next/link';

// TODO A11y: https://www.a11ymatters.com/pattern/pagination/
export function Pagination() {
  return (
    <nav className="mt-6" role="navigation" aria-label="Pagination Navigation">
      <ul className="flex flex-row items-center justify-center gap-x-4">
        <li>
          <Link href="#" aria-label="Goto Page 1">1</Link>
        </li>
        <li>
          <Link href="#" aria-label="Goto Page 2">2</Link>
        </li>
        <li>
          <Link href="#" aria-label="Goto Page 3">3</Link>
        </li>
        <li>
          <Link href="#" aria-label="Goto Page 4">4</Link>
        </li>
      </ul>
    </nav>
  );
}