
export function Article() {
  return (
    <article className="border border-solid px-1">
      <h2 className="text-lg">Title</h2>
      <div>
        <ul className="flex gap-x-2">
          <li className="border border-solid rounded px-1">
            <span className="text-sm">Tag 1</span>
          </li>
          <li className="border border-solid rounded px-1">
            <span className="text-sm">Tag 2</span>
          </li>
          <li className="border border-solid rounded px-1">
            <span className="text-sm">Tag 3</span>
          </li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id risus gravida, dictum lorem</p>
    </article>
  )
}