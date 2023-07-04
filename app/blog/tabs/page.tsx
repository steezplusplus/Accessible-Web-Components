/* eslint-disable max-len */
'use client';

import { Tabs, TabsProps } from './_components/tabs/Tabs';
import TabsExample from './example.mdx';

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
        <h1>Tabs with Automatic Activation</h1>
        <p>
          A Tab will be automatically activated and its associated Tabpabel will be displayed when the Tab receives focus.
          This implementation assumes the first Tab and associated Tabpabel is always initially activated.
          Press Tab and Shift+Tab to navigate focus between the Tab and its associated Tabpanel.
          Press Left and Right arrows to navigate focus between the Tabs.
        </p>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
        <div className="not-prose">
          <Tabs {...props} />
        </div>
        <TabsExample />
      </article>
    </>
  );
}
