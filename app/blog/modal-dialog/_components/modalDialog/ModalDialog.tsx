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
      <button onClick={openModal} className="rounded border">Open Modal</button>
      <dialog ref={modalRef} className="rounded border border-black bg-slate-200">
        <header className="flex">
          <h2>This is a modal dialog!</h2>
          <button onClick={closeModal} className="ml-auto">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </header>
        <form method="dialog">
          <button className="rounded border">Close and Submit</button>
        </form>
      </dialog>
    </>
  );
}