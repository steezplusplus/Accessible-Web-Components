import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="text-4xl">Helping people make the web a better place through accessible software.</h1>
        <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="/blog">Read the blog</Link>
        <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="/about">Learn about me</Link>
      </section>
    </>
  );
}
