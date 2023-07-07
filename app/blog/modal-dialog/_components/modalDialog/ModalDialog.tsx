'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const labelId = 'modal-dialog-label';
const descriptionId = 'modal-dialog-description';

export function ModalDialog() {
  const modaDialogRef = useRef<HTMLDialogElement>(null);

  const showModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.showModal();
    }
  };

  const closeModalDialog = () => {
    if (modaDialogRef.current) {
      modaDialogRef.current.close();
    }
  };

  return (
    <>
      <button onClick={showModalDialog} className="rounded border px-2 py-1 hover:bg-slate-100">Open a Modal Dialog...</button>
      <dialog
        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="fixed top-1/4 h-fit rounded border border-black bg-slate-200 p-2 "
      >
        <div className="flex justify-center gap-x-4">
          <h2 id={labelId} className="text-3xl font-semibold">Hello!</h2>
          <button onClick={closeModalDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <p id={descriptionId} className="font-light">This is a modal dialog!</p>
      </dialog>
    </>
  );
}