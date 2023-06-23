import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <h2 className="text-4xl">Helping people make the web a better place through accessible software.</h2>
          </li>
          <li>
            <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="/blog">Read the blog</Link>
          </li>
          <li>
            <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="/about">Learn about me</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

{/* <section className="grid lg:grid-cols-2 md:grid-cols-1 border-dotted border-blue-500">
<div className="border border-solid">
  Asset
</div>
<div className="border border-solid">
  <h2 className="text-4xl">I strive to empower all users through accessible solutions</h2>
</div>
</section>

<section className="border  border-dotted border-green-500">
Featured article
</section> */}