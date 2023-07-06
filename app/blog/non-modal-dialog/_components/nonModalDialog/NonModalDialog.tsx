'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const labelId = 'non-modal-dialog-label';

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
      <button onClick={showNonModalDialog} className="prose rounded border px-2 py-1 text-sm">Open a Non-Modal Dialog...</button>
      <dialog
        ref={nonModalDialogRef}
        aria-labelledby={labelId}
        className="prose fixed bottom-1/3 h-fit rounded border border-black bg-slate-200 p-2 prose-h2:my-1"
      >
        <div autoFocus className="flex justify-center gap-x-4">
          <h2 id={labelId}>This is a non-modal dialog!</h2>
          <button onClick={closeNonModalDialog}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      </dialog>
    </>
  );
}