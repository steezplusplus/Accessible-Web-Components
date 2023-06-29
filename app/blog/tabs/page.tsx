'use client';

import { Tabs } from './_components/tabs/Tabs';

export default function Page() {
  return (
    <>
      <article className="prose mx-auto md:prose-lg lg:prose-xl">
        <h1>Tabs</h1>
        <p>
          Many implementations of the Tab exist that do not follow
          proper a11y guidelines. They also tend to have poor UX,
          because they hide content that cannot be linked to.
        </p>
      </article>
      <Tabs />
    </>
  );
}
