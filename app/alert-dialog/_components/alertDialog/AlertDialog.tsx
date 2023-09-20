'use client';

import { Disclosure } from '@/app/blog/_components/disclosure/Disclosure';
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
      <Disclosure handleClick={showAlertDialog} label="Open Alert Dialog..." />
      <dialog
        ref={alertDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        className="fixed top-1/2 h-fit rounded border border-black bg-red-400 p-2"
        role="alertdialog"
      >
        <div className="flex">
          <h2 id={labelId} className="mb-2 text-3xl font-semibold">
            Oh no!
          </h2>
          <button onClick={closeAlertDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div id={descriptionId}>
          <p>This is an alert dialog! This is some critical information.</p>
        </div>
      </dialog>
    </>
  );
}
