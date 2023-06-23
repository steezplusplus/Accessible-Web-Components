import Link from 'next/link';

export type ArticleProps = {
  title: string;
  description: string;
  slug: string;
};

export function Article(props: ArticleProps) {
  const { title, description, slug } = props;
  return (
    <article className="w-full rounded-lg border border-gray-200 bg-white shadow-md">
      <Link href={`/blog/${slug}`}>
        <div className="h-48 w-full bg-gradient-to-r from-rose-400 to-red-500" />
      </Link>
      <div className="p-5">
        <Link href={`/blog/${slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" href={`/blog/${slug}`}>
          Read more
        </Link>
      </div>
    </article>
  );
}