'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const labelId = 'non-modal-dialog-label';
const descriptionId = 'non-modal-dialog-description';

export function NonModalDialog() {
  const nonModalDialogRef = useRef<HTMLDialogElement>(null);

  const showNonModalDialog = () => {
    if (nonModalDialogRef.current) {
      nonModalDialogRef.current.show();
    }
  };

  const closeNonModalDialog = () => {
    if (nonModalDialogRef.current) {
      nonModalDialogRef.current.close();
    }
  };

  return (
    <>
      <button onClick={showNonModalDialog} className="rounded border px-2 py-1 hover:bg-slate-100">Open a Non-Modal Dialog...</button>
      <dialog
        ref={nonModalDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="fixed bottom-[15%] h-fit rounded border border-black bg-slate-200 p-2"
      >
        <div className="flex items-center gap-x-4">
          <h2 id={labelId} className="mb-2 text-3xl font-semibold">Hello!</h2>
          <button onClick={closeNonModalDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <p id={descriptionId} className="font-light">This is a non-modal dialog!</p>
      </dialog>
    </>
  );
}