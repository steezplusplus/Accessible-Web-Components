'use client';

import { Disclosure } from '@/app/blog/_components/disclosure/Discolsure';
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
      <Disclosure handleClick={showNonModalDialog} label="Open Non-Modal Dialog..." />
      <dialog
        ref={nonModalDialogRef}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        autoFocus
        className="fixed bottom-[15%] h-fit rounded border border-black bg-emerald-100 p-2"
      >
        <div className="flex items-center gap-x-4">
          <h2 id={labelId} className="mb-2 text-3xl font-semibold">Hello!</h2>
          <button onClick={closeNonModalDialog} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <p id={descriptionId} className="mb-2 font-light">This is a non-modal dialog!</p>
        <button
          className="rounded border border-gray-300 px-2 py-1"
          onClick={closeNonModalDialog}
        >
          Close...
        </button>
      </dialog>
    </>
  );
}