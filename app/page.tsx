import { ArrowLink } from '@/app/_components/arrowLink/ArrowLink';

export default async function Home() {
  return (
    <div>
      <header className="bg-gradient-to-r from-emerald-500 to-emerald-900">
        <ul className="flex flex-col gap-y-8 p-8">
          <li>
            <h2 className="text-7xl leading-tight text-white">Making the web a better place through accessible software.</h2>
          </li>
          <li>
            <ul className="flex flex-row items-center gap-x-8">
              <ArrowLink href="/about" title="More About Me" />
              <ArrowLink href="/blog" title="Read the blog" />
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