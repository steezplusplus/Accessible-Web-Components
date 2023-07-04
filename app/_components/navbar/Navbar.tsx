import { NavLink } from './navLink/NavLink';

export function Navbar() {
  return (
    <ul className="flex h-full items-center border-b border-solid bg-white px-8">
      <li>
        <NavLink href="/" name="Steez++" />
      </li>
      <li className="ml-auto">
        <NavLink href="/about" name="About" />
      </li>
      <li className="ml-3">
        <NavLink href="/blog" name="Blog" />
      </li>
    </ul >
  );
}