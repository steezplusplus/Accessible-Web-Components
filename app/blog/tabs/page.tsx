/* eslint-disable max-len */
'use client';

import { Tabs, TabsProps } from './_components/tabs/Tabs';

const props: TabsProps = {
  title: 'Tabs Title',
  tabs: [
    {
      title: 'Tab 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum commodo commodo.'
    },
    {
      title: 'Tab 2',
      content: 'Curabitur bibendum commodo imperdiet. Vestibulum tempus sem mi, et cursus tortor egestas vitae.'
    },
    {
      title: 'Tab 3',
      content: 'Morbi feugiat, tellus sit amet aliquam interdum, neque sapien vehicula nisi, at ornare velit massa nec ex.'
    }
  ],
};

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
      </article>
      <Tabs {...props} />
    </>
  );
}
