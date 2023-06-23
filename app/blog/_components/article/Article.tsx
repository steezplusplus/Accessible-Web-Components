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
        <Link href={`/blog/${slug}`}>
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </Link>
      </header>
      <section className="px-2 py-1">
        <p className="mb-3 font-light text-gray-700">{description}</p>
      </section>
      <footer className="px-2 py-1">
        <Link className="rounded-lg border px-3 text-center text-sm font-medium" href={`/blog/${slug}`}>
          Read more
        </Link>
      </footer>
    </article>
  );
}