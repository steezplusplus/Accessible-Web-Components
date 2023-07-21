import { AlertDialog } from './_components/alertDialog/AlertDialog';

export const metadata = {
  title: 'Steez++ | Alert Dialog',
  description: 'Supporting resources to make the web accessible',
};

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Alert Dialog</h1>
          <p>
            An Alert Dialog is a descendant window of the primary application window.
            When open, the user may not interact with the primary application.
          </p>
          <p>
            Press Tab and Shift+Tab while the Alert Dialog is open, and you will see{' '}
            that the primary application window is not interactable.
          </p>
        </header>
        <p>
          On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <AlertDialog />
      </div>
    </>
  );
}