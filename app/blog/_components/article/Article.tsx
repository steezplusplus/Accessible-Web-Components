const gradients = [
  'bg-gradient-to-r from-indigo-400 to-cyan-400',
  'bg-gradient-to-r from-amber-200 to-yellow-500',
  'bg-gradient-to-r from-purple-500 to-purple-900',
  'bg-gradient-to-r from-cyan-500 to-blue-500',
  'bg-gradient-to-r from-violet-200 to-pink-200',
  'bg-gradient-to-r from-fuchsia-500 to-cyan-500',
  'bg-gradient-to-r from-amber-500 to-pink-500',
  'bg-gradient-to-r from-fuchsia-600 to-purple-600',
  'bg-gradient-to-r from-rose-400 to-red-500',
];

export type ArticleProps = {
  gradient: number;
};

export function Article(props: ArticleProps) {
  const { gradient } = props;
  return (
    <article className="w-full rounded-lg border border-gray-200 bg-white shadow-md">
      <a href="#">
        <div className={`h-48 w-full ${gradients[gradient]}`} />
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