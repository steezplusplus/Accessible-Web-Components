'use client';

import Link from 'next/link';

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
        <Link
          className="text-2xl font-bold tracking-tight text-blue-900 hover:underline"
          href={`/blog/${slug}`}
        >
          {title}
        </Link>
      </header>
      <p className="border-t p-2 font-light">{description}</p>
    </article >
  );
}