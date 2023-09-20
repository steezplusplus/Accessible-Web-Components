import { NavLink } from './navLink/NavLink';

export function Navbar() {
  return (
    <ul className="flex h-full items-center border-b border-solid bg-gradient-to-r from-emerald-900 to-emerald-500 px-8 text-white">
      <li>
        <NavLink href="/" name="Accessible Web Components" />
      </li>
      <li className="ml-auto">
        <NavLink href="/about" name="About" />
      </li>
    </ul>
  );
}
