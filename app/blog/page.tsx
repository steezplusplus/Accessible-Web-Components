import { Article } from "./_components/article/Article";
import { Header } from "./_components/header/Header";

export default async function Blog() {
  return (
    <>
      <Header />
      <section className="grid gap-10 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article title="title" description="description" slug="0" />
        <Article title="title" description="description" slug="1" />
        <Article title="title" description="description" slug="2" />
        <Article title="title" description="description" slug="3" />
        <Article title="title" description="description" slug="4" />
        <Article title="title" description="description" slug="5" />
        <Article title="title" description="description" slug="6" />
        <Article title="title" description="description" slug="7" />
        <Article title="title" description="description" slug="8" />
      </section>
    </>
  );
}
