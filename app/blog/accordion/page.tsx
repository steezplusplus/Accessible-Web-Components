'use client';

import { Accordion } from './_components/accordion/Accordion';

export default function Page() {
  return (
    <article className="prose mx-auto mt-8 md:prose-lg lg:prose-xl">
      <h1>Accordion with Automatic Activation</h1>
      <p>Some intro</p>
      <p>
        On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
      </p>
      <div className="not-prose">
        <Accordion />
      </div>
    </article>
  );
}
