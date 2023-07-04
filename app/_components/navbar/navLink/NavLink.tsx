'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export type NavLinkProps = {
  href: string;
  name: string;
}

export function NavLink(props: NavLinkProps) {
  const { href, name } = props;
  const pathname = usePathname();

  let ariaCurrent: 'page' | undefined = undefined;

  if (href !== '/' && pathname.startsWith(href)) {
    ariaCurrent = 'page';
  }

  if (href === '/' && pathname === '/') {
    ariaCurrent = 'page';
  }

  return (
    <Link className="group text-black transition duration-300" href={href} aria-current={ariaCurrent}>
      {name}
      <span className="block h-0.5 max-w-0 bg-black transition-all duration-700 group-aria-[current=page]:max-w-full" />
    </Link>
  );
}