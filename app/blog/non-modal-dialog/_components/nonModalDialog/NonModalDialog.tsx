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
      <button onClick={showNonModalDialog} className="prose rounded border px-2 py-1 text-sm">Open a Non-Modal Dialog...</button>
      <dialog
        ref={nonModalDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        className="prose fixed bottom-1/3 h-36 rounded border border-black bg-slate-200 p-2 prose-h2:my-1"
      >
        <div className="flex justify-center">
          <h2 id={labelId}>This is a non-modal dialog!</h2>
          <button onClick={closeNonModalDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div id={descriptionId}>
          <p>
            You can still interact with the primary application window while this is open.
          </p>
        </div>
      </dialog>
    </>
  );
}