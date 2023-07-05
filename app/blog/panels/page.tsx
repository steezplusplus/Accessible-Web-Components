'use client';

import { Panels, PanelProps } from './_components/panels/Panels';

const panels: PanelProps[] = [
  {
    label: 'Panel 1',
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum commodo commodo.</p>,
  },
  {
    label: 'Panel 2',
    children: <p>Curabitur bibendum commodo imperdiet. Vestibulum tempus sem mi, et cursus tortor egestas vitae.</p>,
  },
  {
    label: 'Panel 3',
    children: <p>Morbi feugiat, tellus sit amet aliquam interdum, neque sapien vehicula nisi, at ornare velit massa nec ex.</p>,
  },
];


export default function Page() {
  return (
    <article className="prose mx-auto mt-8 md:prose-lg lg:prose-xl">
      <h1>Panels</h1>
      <p>
        Each panel contains a header and some content. Interacting with the header
        toggles between hiding and showing associated content.
      </p>
      <p>
        The panel headers use h3 elements in this example, so it fits correctly within this page.
        This may need to be adjusted to fit proper heading guidelines depending on your page.
      </p>
      <p>
        On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
      </p>
      <div className="not-prose">
        <Panels panels={panels} />
      </div>
    </article>
  );
}
