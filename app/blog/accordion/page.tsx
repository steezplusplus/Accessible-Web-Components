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
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Accordion</h1>
        </header>
        <p>
          Each accordion contains a header and an associated panel. Interacting with the header
          toggles between hiding and showing the associated panel.
        </p>
        <p>
          When focused on a header, pressing Enter or Space will open the associated panel, and close the rest of them.
          Tab and Shift+Tab is used to navigate between the headers.
          If the panels contain focusable elements (i.e. form elements), they will properly enter and exit focus order.
        </p>
        <p>
          On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="mx-auto max-w-prose">
        <Accordion panels={panels} />
      </div>
    </>
  );
}
