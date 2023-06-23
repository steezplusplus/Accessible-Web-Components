import { Article } from "./_components/article/Article";
import { Header } from "./_components/header/Header";

export default async function Blog() {
  return (
    <>
      <Header />
      <section className="grid gap-10 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article gradient={0} />
        <Article gradient={1} />
        <Article gradient={2} />
        <Article gradient={3} />
        <Article gradient={4} />
        <Article gradient={5} />
        <Article gradient={6} />
        <Article gradient={7} />
        <Article gradient={8} />
      </section>
    </>
  );
}
