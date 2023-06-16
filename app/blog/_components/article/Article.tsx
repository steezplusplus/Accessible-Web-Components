import Link from 'next/link';
import { Tag } from "../tag/Tag";

export type ArticleProps = {
  title: string;
  tags: {
    name: string;
    slug: string;
  }[];
  summary: string;
}

export function Article(props: ArticleProps) {
  const { title, tags, summary }  = props;
  return (
    <article className="border border-solid border-black rounded-sm p-1">
      <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="#">{title}</Link>
      <div>
        <ul className="flex gap-x-2">
          {tags.map((tag, i) => {
            return <li key={`${tag.name}-${i}`}>
              <Tag displayText={tag.name} />
            </li>
          })}
        </ul>
      </div>
      <p>{summary}</p>
    </article>
  )
}