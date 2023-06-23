import Link from 'next/link';

export type ArticleProps = {
  title: string;
  description: string;
  slug: string;
};

export function Article(props: ArticleProps) {
  const { title, description, slug } = props;
  return (
    <article className="rounded-[0.75rem] border border-gray-500 bg-white p-1">
      <header className="rounded-lg border-transparent bg-amber-500">
        <Link href={`/blog/${slug}`}>
          <h3 className="px-2 py-1 text-2xl font-bold tracking-tight text-white">{title}</h3>
        </Link>
      </header>
      <section className="px-2 py-1">
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </section>
      <footer className="px-2 py-1">
        <Link className="inline-flex items-center rounded-lg bg-amber-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" href={`/blog/${slug}`}>
          Read more
        </Link>
      </footer>
    </article>
  );
}