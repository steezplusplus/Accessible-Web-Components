import { ModalDialog } from './_components/modalDialog/ModalDialog';

export const metadata = {
  title: 'Steez++ | Modal Dialog',
  description: 'Supporting resources to make the web accessible',
};

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Modal Dialog</h1>
        </header>
        <p>
          A Modal Dialog is a descendant window of the primary application window that blocks interacting with the primary application window.
        </p>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <ModalDialog />
      </div>
    </>
  );
}
