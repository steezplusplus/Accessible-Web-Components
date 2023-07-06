import { NonModalDialog } from './_components/nonModalDialog/NonModalDialog';

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Non Modal Dialog</h1>
          <p>
            A Non Modal Dialog is a descendant window of the primary application window that does not block interacting with the primary application window.
          </p>
        </header>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <NonModalDialog />
      </div>
    </>
  );
}