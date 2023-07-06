'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

// TODO refactor to NonModalDialog
export function Dialog() {
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
      <button onClick={openDialog} className="rounded border">Open Dialog</button>
      <dialog ref={dialogRef} className="rounded border border-black bg-slate-200 p-2">
        <header className="flex">
          <h2 className="mr-4 text-lg">This is a non-modal dialog!</h2>
          <button onClick={closeDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </header>
      </dialog>
    </>
  );
}