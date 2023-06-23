import Link from 'next/link';

export type ArrowLinkProps = {
  href: string;
  title: string;
}

// TODO Rethink iconography
export function ArrowLink(props: ArrowLinkProps) {
  const { href, title } = props;
  return (
    <li className="flex flex-row items-center gap-x-8 rounded border border-white px-4 py-2">
      <span className="flex">
        <Link className="text-xl text-white hover:underline" href={href}>{title}</Link>
        <svg className="ml-2 w-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </span>
    </li>
  );
}