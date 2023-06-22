import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <header className="grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-full flex items-center justify-center border-4 border-solid border-red-800 lg:col-span-7 lg:col-start-6">
          Asset
        </div>
        <div className="col-span-full border-4 border-solid border-green-800 lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <h2 className="text-4xl">Helping people make the web a better place through accessible software.</h2>
          <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="/blog">Read the blog</Link>
          <Link className="text-xl text-blue-800 hover:text-blue-900 hover:underline" href="/about">Learn about me</Link>
        </div>
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