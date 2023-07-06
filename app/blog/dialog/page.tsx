import { Dialog } from './_components/dialog/Dialog';

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Dialog</h1>
          <p>
            A Dialog is a descendant window of the primary application window that does not block interacting with the primary application window.
          </p>
        </header>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="mx-auto max-w-prose">
        <Dialog />
      </div>
    </>
  );
}