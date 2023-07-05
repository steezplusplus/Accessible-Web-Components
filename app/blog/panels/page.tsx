'use client';

import { Panels, PanelProps } from './_components/panels/Panels';

const panels: PanelProps[] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>hi</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>hi</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>hi</p>,
  },
];


export default function Page() {
  return (
    <article className="prose mx-auto mt-8 md:prose-lg lg:prose-xl">
      <h1>Panels with Automatic Activation</h1>
      <p>Some intro</p>
      <p>
        On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
      </p>
      <div className="not-prose">
        <Panels panels={panels} />
      </div>
    </article>
  );
}
