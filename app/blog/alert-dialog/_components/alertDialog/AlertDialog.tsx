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
      <button onClick={showAlertDialog} className="rounded border px-2 py-1 hover:bg-slate-100">Open Alert Dialog...</button>
      <dialog
        ref={alertDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        className="fixed top-1/4 h-fit rounded border border-black bg-red-400 p-2"
        role="alertdialog"
      >
        <div className="flex">
          <h2 id={labelId} className="text-xl font-semibold">Oh no!</h2>
          <button onClick={closeAlertDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div id={descriptionId}>
          <p>
            This is an alert dialog! This is some critical information.
          </p>
        </div>
      </dialog>
    </>
  );
}