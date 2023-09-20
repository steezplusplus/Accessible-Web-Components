import Link from 'next/link';

export type ArticleProps = {
  title: string;
  description: string;
  slug: string;
};

export function Article(props: ArticleProps) {
  const { title, description, slug } = props;
  return (
    <li className="rounded border border-black p-3">
      <h2 className="mb-2 border-b">
        <Link
          className="text-2xl font-bold tracking-tight text-blue-900 hover:underline"
          href={`/${slug}`}
        >
          {title}
        </Link>
      </h2>
      <p className="font-light">{description}</p>
    </li>
  );
}
