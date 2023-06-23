import Link from 'next/link';

export type NavLinkProps = {
  href: string;
  title: string;
}

export function NavLink(props: NavLinkProps) {
  const { href, title } = props;
  return (
    <Link className="group text-black transition duration-300" href={href}>
      {title}
      <span className="block h-0.5 max-w-0 bg-black transition-all duration-700 group-hover:max-w-full" />
    </Link>
  );
}