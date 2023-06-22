import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <header className="mx-auto grid h-auto max-w-7xl grid-cols-4 gap-x-4 border border-dotted border-red-500 pt-12 md:grid-cols-8 lg:min-h-[40rem] lg:grid-cols-12 lg:gap-x-6 lg:pb-12">
        <div className="col-span-full mb-12 flex items-center justify-center border border-solid lg:col-span-7 lg:col-start-6 lg:-mt-12 lg:mb-0 lg:px-0">
          Asset
        </div>
        <div className="col-span-full flex flex-col border border-solid pt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:h-full">
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