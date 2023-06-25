'use client';

import Link from 'next/link';

// TODO If I use pagination: https://www.a11ymatters.com/pattern/pagination/
// TODO If i use infinite scroll: https://www.w3.org/WAI/ARIA/apg/patterns/feed/
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