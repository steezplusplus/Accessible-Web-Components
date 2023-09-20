'use client';

import { Disclosure } from '@/app/blog/_components/disclosure/Disclosure';
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
      <Disclosure
        handleClick={showModalDialog}
        label="Open a Modal Dialog..."
      />
      <dialog
        ref={modaDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="fixed top-1/2 h-fit rounded border border-black bg-emerald-100 p-2 "
      >
        <div className="flex justify-center gap-x-4">
          <h2 id={labelId} className="mb-2 text-3xl font-semibold">
            Hello!
          </h2>
          <button onClick={closeModalDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div id={descriptionId} className="mb-2 font-light">
          <p className="mb-1">
            This is a modal dialog! It blocks user interaction with the primary
            application window.
          </p>
          <p>
            Press and hold Tab, see that you cannot focus elements outside this
            window.
          </p>
        </div>
        <button
          className="rounded border border-gray-300 px-2 py-1"
          onClick={closeModalDialog}
        >
          Close...
        </button>
      </dialog>
    </>
  );
}
