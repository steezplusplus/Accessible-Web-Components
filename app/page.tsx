import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <header className="bg-gradient-to-r from-emerald-500 to-emerald-900">
        <ul className="flex flex-col gap-y-8 p-8">
          <li>
            <h2 className="text-7xl text-white">Making the web a better place through accessible software.</h2>
          </li>
          <li>
            <ul className="flex flex-row items-center gap-x-8">
              <li className="rounded border border-white px-4 py-2">
                <Link className="text-xl font-light text-white hover:underline" href="/blog">
                  <span className="flex">
                    Read the blog
                    <svg className="ml-2 w-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="flex flex-row items-center gap-x-8 rounded border border-white px-4 py-2">
                <span className="flex">
                  <Link className="text-xl text-white hover:underline" href="/about">More about me</Link>
                  <svg className="ml-2 w-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </li>
            </ul>
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