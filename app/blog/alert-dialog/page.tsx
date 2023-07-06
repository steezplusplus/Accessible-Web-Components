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
            An Alert Dialog is a descendant window of the primary application window that blocks interacting with the primary application window until
            {' '} the user has responded to it. This makes a <i>modal dialog</i>, except to specifically notify the user with some critical information.
          </p>
        </header>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <AlertDialog />
      </div>
    </>
  );
}