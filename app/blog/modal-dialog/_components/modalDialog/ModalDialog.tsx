'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const labelId = 'modal-dialog-label';

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
      <button onClick={showModalDialog} className="prose rounded border px-2 py-1 text-sm">Open a Modal Dialog...</button>
      <dialog

        ref={modaDialogRef}
        aria-labelledby={labelId}
        className="prose fixed top-1/4 h-fit rounded border border-black bg-slate-200 p-2 prose-h2:my-1"
      >
        <div className="flex justify-center gap-x-4">
          <h2 id={labelId}>This is a modal dialog!</h2>
          <button onClick={closeModalDialog}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      </dialog>
    </>
  );
}