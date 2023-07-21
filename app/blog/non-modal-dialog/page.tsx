import { NonModalDialog } from './_components/nonModalDialog/NonModalDialog';

export const metadata = {
  title: 'Steez++ | Non-Modal Dialog',
  description: 'Supporting resources to make the web accessible',
};

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Non-Modal Dialog</h1>
          <p>
            A Non-Modal Dialog is a descendant window of the primary application window.{' '}
            When open, the user is not blocked from interacting with the primary application window.
            Since it will not change the functionality of the web page, the user may ignore it alltogether.
          </p>
          <p>
            Press Tab and Shift+Tab while the Non-Modal Dialog is open, and you will see{' '}
            that the primary application window is interactable as normal.
          </p>
        </header>
        <p>
          On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <NonModalDialog />
      </div>
    </>
  );
}