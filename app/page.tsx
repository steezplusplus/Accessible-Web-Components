import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <header className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl h-auto pt-12 lg:min-h-[40rem] lg:pb-12 border border-dotted border-red-500">
        <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mr-5vw lg:-mt-12 lg:px-0 border border-solid">
          Asset
        </div>
        <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 flex lg:h-full flex-col lg:col-span-5 border border-solid">
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