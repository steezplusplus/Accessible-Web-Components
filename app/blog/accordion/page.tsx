import { Accordion, PanelProps } from './_components/panels/Accordion';

const panels: PanelProps[] = [
  {
    header: 'Accordion 1',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum commodo commodo.</p>,
  },
  {
    header: 'Accordion 2',
    content: <p>Curabitur bibendum commodo imperdiet. Vestibulum tempus sem mi, et cursus tortor egestas vitae.</p>,
  },
  {
    header: 'Accordion 3',
    content: <p>Morbi feugiat, tellus sit amet aliquam interdum, neque sapien vehicula nisi, at ornare velit massa nec ex.</p>,
  },
];

export default function Page() {
  return (
    <article className="prose mx-auto mt-8 md:prose-lg lg:prose-xl">
      <h1>Accordion</h1>
      <p>
        Each accordion contains a header and an associated panel. Interacting with the header
        toggles between hiding and showing the associated panel.
      </p>
      <p>
        The accordion header uses an h2 element in this example, so it fits correctly within this page.
        This may need to be adjusted to fit proper heading guidelines depending on your page.
      </p>
      <p>
        On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
      </p>
      <div className="not-prose">
        <Accordion panels={panels} />
      </div>
    </article>
  );
}
