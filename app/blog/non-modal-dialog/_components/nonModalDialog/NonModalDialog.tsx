'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

export function NonModalDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.show();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button onClick={openDialog} className="prose rounded border px-2 py-1 text-sm">Open a Non-Modal Dialog...</button>
      <dialog
        ref={dialogRef}
        aria-labelledby="dialog-label"
        className="prose fixed bottom-1/3 h-36 rounded border border-black bg-slate-200 p-2 prose-h2:my-1"
      >
        <header className="flex justify-center">
          <h2 id="dialog-label">This is a non-modal dialog!</h2>
          <button onClick={closeDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </header>
        <p>
          You can still interact with the primary application window.
          <br />
          Try Tab and Shift+Tab to navigate, or highlight text with your cursor.
        </p>
      </dialog>
    </>
  );
}