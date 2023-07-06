'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const labelId = 'alert-dialog-label';
const descriptionId = 'alert-dialog-descripton';

export function AlertDialog() {
  const alertDialogRef = useRef<HTMLDialogElement>(null);

  const showAlertDialog = () => {
    if (alertDialogRef.current) {
      alertDialogRef.current.showModal();
    }
  };

  const closeAlertDialog = () => {
    if (alertDialogRef.current) {
      alertDialogRef.current.close();
    }
  };

  return (
    <>
      <button onClick={showAlertDialog} className="prose rounded border px-2 py-1 text-sm">Open Alert Dialog...</button>
      <dialog
        ref={alertDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        className="prose fixed bottom-1/3 h-36 rounded border border-black bg-red-400 p-2 prose-h2:my-1"
        role="alertdialog"
      >
        <div className="flex justify-center">
          <h2 id={labelId}>This is an alert dialog!</h2>
          <button onClick={closeAlertDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div id={descriptionId}>
          <p>
            Oh no! This means there was an error.
          </p>
        </div>
      </dialog>
    </>
  );
}