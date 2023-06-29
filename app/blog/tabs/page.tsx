'use client';

import { Tabs } from './_components/tabs/Tabs';
import Part1 from './part1.mdx';

export default function Page() {
  return (
    <>
      <article className="prose mx-auto mt-8 md:prose-lg lg:prose-xl">
        <h1>Tabs</h1>
        <p>
          Many implementations of the Tab exist that do not follow
          proper a11y guidelines. They also tend to have poor UX,
          because they hide content that cannot be linked to.
          This implementation also assumed that the first tab
          should be open when the page loads.
        </p>
        <Part1 />
      </article>
      <Tabs />
    </>
  );
}
