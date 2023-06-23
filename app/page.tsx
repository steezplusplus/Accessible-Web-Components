import { ArrowLink } from '@/app/_components/arrowLink/ArrowLink';

export default async function Home() {
  return (
    <div>
      <header className="mb-10 bg-gradient-to-r from-emerald-500 to-emerald-900">
        <ul className="flex flex-col gap-y-8 p-8">
          <li>
            <h2 className="text-7xl leading-tight text-white">Making the web a better place through accessible software.</h2>
          </li>
          <li>
            <ul className="flex flex-row items-center gap-x-8">
              <ArrowLink href="/about" title="About the project" />
              <ArrowLink href="/blog" title="Read the blog" />
            </ul>
          </li>
        </ul>
      </header>

      <section>
        <div className="mb-10 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold tracking-widest">How I&apos;m here to help you</h3>
        </div>

        <ul className="grid gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex flex-col items-center justify-center">
            <div className="mb-2 h-24 w-24 bg-emerald-500" />
            Audit & Optimize
          </li>
          <li className="flex flex-col items-center justify-center">
            <div className="mb-2 h-24 w-24 bg-emerald-500" />
            Build on your foundation
          </li>
          <li className="flex flex-col items-center justify-center">
            <div className="mb-2 h-24 w-24 bg-emerald-500" />
            Achieve WCAG 2.1 Compliance
          </li>
          <li className="flex flex-col items-center justify-center">
            <div className="mb-2 h-24 w-24 bg-emerald-500" />
            Simplify SDLC with automation
          </li>
          <li className="flex flex-col items-center justify-center">
            <div className="mb-2 h-24 w-24 bg-emerald-500" />
            Deliver accessability by default
          </li>
          <li className="flex flex-col items-center justify-center">
            <div className="mb-2 h-24 w-24 bg-emerald-500" />
            Focus on beautiful UI
          </li>
        </ul>
      </section>
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