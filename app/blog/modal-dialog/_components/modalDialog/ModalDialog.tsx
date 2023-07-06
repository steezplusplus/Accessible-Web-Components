'use client';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

// TODO refactor to Modal Dialog
export function ModalDialog() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <button onClick={openModal} className="prose rounded border px-2 py-1 text-sm">Open a Modal Dialog...</button>
      <dialog ref={modalRef} className="prose fixed top-1/4 h-36 rounded border border-black bg-slate-200 p-2 prose-h2:my-1">
        <header className="flex justify-center">
          <h2>This is a modal dialog!</h2>
          <button onClick={closeModal} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </header>
        <p>
          You can no longer interact with the primary application window.
          <br />
          Close the modal dialog to resume.
        </p>
      </dialog>
    </>
  );
}