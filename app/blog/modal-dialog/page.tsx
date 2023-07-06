import { ModalDialog } from './_components/modalDialog/ModalDialog';

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
      <div className="mx-auto max-w-prose">
        <ModalDialog />
      </div>
    </>
  );
}


{/* <p>
When a modal dialog opens
</p>
<ol>
<li>
  A descendant window is created that overlays the primary window. It dims the primary application window with a backdrop.
</li>
<li>
  Focus is moved to the first interactive element within the modal dialog.
</li>
<li>
  While open, the user can Tab and Shift+Tab to <i>cycle</i> the interactive elements it contains.
</li>
<li>
  The user can not interact with the primary window until the modal dialog window is closed.
</li>
<li>
  When the modal is closed, focus is returned to the element that opened the modal dialog.
</li>
</ol> */}