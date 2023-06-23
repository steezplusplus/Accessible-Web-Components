export function Article() {
  return (
    <article className="mb-5 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
      <a href="#">
        <div className="h-48 w-full bg-amber-500" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Description</p>
        <a className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" href="#">
          Read more
        </a>
      </div>
    </article>
  );
}