'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export type ArticleProps = {
  title: string;
  description: string;
  slug: string;
};

export function Article(props: ArticleProps) {
  const { title, description, slug } = props;
  return (
    <article className="rounded-[0.75rem] border p-1">
      <header className="rounded-lg px-2 py-1">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </Link>
      </header>

      <section className="px-2 py-1">
        <p className="font-light">{description}</p>
      </section>

      <footer className="px-2 py-1">
        <Link className="text-xlhover:underline group" href={`blog/${slug}`}>
          <span className="flex items-center gap-x-2">
            <i className="italic">Read more</i>
            <FontAwesomeIcon className="group-hover:translate-x-1 group-focus:translate-x-1" icon={faArrowAltCircleRight} color="black" size="sm" />
          </span>
        </Link>
      </footer>
    </article >
  );
}