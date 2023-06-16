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
    <article className="border border-solid px-1">
      <h2 className="text-lg">{title}</h2>
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
  );
}