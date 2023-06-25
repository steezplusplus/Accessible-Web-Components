'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export type ArrowLinkProps = {
  href: string;
  title: string;
}

export function ArrowLink(props: ArrowLinkProps) {
  const { href, title } = props;
  return (
    <li className="flex flex-row items-center rounded border border-white">
      <Link className="group px-4 py-2 text-xl text-white hover:underline" href={href}>
        <span className="flex items-center gap-x-2">
          {title}
          <FontAwesomeIcon className="group-hover:translate-x-1 group-focus:translate-x-1" icon={faArrowAltCircleRight} color="white" size="sm" />
        </span>
      </Link>
    </li>
  );
}