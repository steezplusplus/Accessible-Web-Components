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
      <button onClick={showModalDialog} className="prose rounded border px-2 py-1 text-sm">Open a Modal Dialog...</button>
      <dialog

        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        className="prose fixed top-1/4 h-36 rounded border border-black bg-slate-200 p-2 prose-h2:my-1"
      >
        <div className="flex justify-center">
          <h2 id={labelId}>This is a modal dialog!</h2>
          <button onClick={closeModalDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div id={descriptionId}>
          <p>
            You can not interact with the primary application window while this is open.
          </p>
        </div>
      </dialog>
    </>
  );
}