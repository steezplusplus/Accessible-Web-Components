import { Article } from "./_components/article/Article";

export default async function Blog() {
  return (
    <div>
      <header className="bg-gradient-to-r from-amber-500 to-pink-500">
        <ul className="flex flex-col gap-y-8 p-8">
          <li>
            <h2 className="text-7xl leading-tight text-white">Blog</h2>
          </li>
          <li>
            <h3 className="text-white">Learn a11y and frontend dev with these articles</h3>
          </li>
        </ul>
      </header>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>

    </div>
  );
}
