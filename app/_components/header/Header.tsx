import { ArrowLink } from '../arrowLink/ArrowLink';

export function Header() {
  return (
    <header className="flex h-full items-center justify-center bg-gradient-to-r from-emerald-900 to-emerald-500">
      <ul className="flex flex-col gap-y-8 p-8">
        <li>
          <h2 className="text-7xl leading-tight text-white">
            Making the web a better place through accessible software.
          </h2>
        </li>
        <li>
          <ul className="flex flex-row items-center gap-x-8">
            <ArrowLink href="/about" title="About the project" />
            <ArrowLink href="/blog" title="Read the blog" />
          </ul>
        </li>
      </ul>
    </header>
  );
}
