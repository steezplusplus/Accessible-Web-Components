import { Tabs, TabsProps } from './_components/tabs/Tabs';

export const metadata = {
  title: 'Accessible Web Components | Tabs',
  description: 'Supporting resources to make the web accessible',
};

const props: TabsProps = {
  title: 'Tabs Title',
  tabs: [
    {
      title: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum commodo commodo.',
    },
    {
      title: 'Tab 2',
      content:
        'Curabitur bibendum commodo imperdiet. Vestibulum tempus sem mi, et cursus tortor egestas vitae.',
    },
    {
      title: 'Tab 3',
      content:
        'Morbi feugiat, tellus sit amet aliquam interdum, neque sapien vehicula nisi, at ornare velit massa nec ex.',
    },
  ],
};

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <h1>Tabs with Automatic Activation</h1>
        <p>
          A Tab will be automatically activated and its associated Tabpanel will
          be displayed when the Tab receives focus. This implementation assumes
          the first Tab and associated Tabpanel is always initially activated.
        </p>
        <p>
          Press Tab and Shift+Tab to navigate focus between the Tab and its
          associated Tabpanel. Press Left and Right arrows to navigate focus
          between the Tabs.
        </p>
        <p>
          On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <Tabs {...props} />
      </div>
    </>
  );
}
