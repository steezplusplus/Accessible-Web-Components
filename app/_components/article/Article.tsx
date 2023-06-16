import { Tag } from "@/app/_components/tag/Tag";

export type ArticleProps = {
  title: string;
}

export function Article(props: ArticleProps) {
  const { title }  = props;
  return (
    <article className="border border-solid px-1">
      <h2 className="text-lg">{title}</h2>
      <div>
        <ul className="flex gap-x-2">
          <li className="border border-solid rounded px-1">
            <Tag displayText="Tag 1" />
          </li>
          <li className="border border-solid rounded px-1">
            <Tag displayText="Tag 2" />
          </li>
          <li className="border border-solid rounded px-1">
            <Tag displayText="Tag 3" />
          </li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id risus gravida, dictum lorem</p>
    </article>
  )
}