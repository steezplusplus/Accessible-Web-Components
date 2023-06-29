/* eslint-disable max-len */
'use client';

import { Tabs, TabsProps } from './_components/tabs/Tabs';
import Part1 from './part1.mdx';
import Part2 from './part2.mdx';

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

        <h2>Plain HTML</h2>
        <p>Notice that it just utilizes skip links instead of buttons, or radios.</p>
        <Part1 />
        <p>Lets see what it looks like so far</p>
        <div>
          <h2 id="tabs-title">Tab Title</h2>
          <div>
            <ul aria-labelledby="tabs-title">
              <li>
                <a id="tab-1" href="#section1">Tab 1</a>
              </li>
              <li>
                <a id="tab-2" href="#section2">Tab 2</a>
              </li>
              <li>
                <a id="tab-3" href="#section3">Tab 3</a>
              </li>
            </ul>
            <div>
              <section id="section1" aria-labelledby="tab-1">Section 1</section>
              <section id="section2" aria-labelledby="tab-2">Section 2</section>
              <section id="section3" aria-labelledby="tab-3">Section 3</section>
            </div>
          </div>
        </div>

        <h2>Now lets refactor with some JSX</h2>
        <Part2 />
        <p>
          Now we have to add interactivity to expose the correct tab panel.
          That can be done with `hidden`, which will remove it from the accessability tree.
          We also want to prevent the event from clicking on the anchor from bubbling outside the component.
          Within the component, we want to use the anchor to leverage it default accessability,
          while not effecting the URL.
        </p>
      </article>

      <Tabs {...props} />

    </>
  );
}
