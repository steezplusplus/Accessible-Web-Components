'use client';

import { useState } from 'react';

export function Switch() {
  const [ariaChecked, setAriaChecked] = useState<boolean>(false);

  const handleClick = () => {
    setAriaChecked(() => !ariaChecked);
  };

  return (
    <button
      role="switch"
      type="button"
      aria-checked={ariaChecked}
      onClick={handleClick}
      className="flex h-8 items-center justify-center rounded border border-black bg-slate-200 p-2"
    >
      <span>Label</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="36" className="ml-2">
        <rect className="fill-white stroke-black" x="1" y="1" width="34" height="18" rx="4" ></rect>
        <rect className={ariaChecked ? 'hidden' : ''} x="4" y="4" width="12" height="12" rx="4"></rect>
        <rect className={ariaChecked ? 'fill-green-600' : 'hidden'} x="20" y="4" width="12" height="12" rx="4"></rect>
      </svg>
      <span
        aria-hidden={ariaChecked}
        className="ml-2"
      >
        {ariaChecked ? 'On' : 'Off'}
      </span>
    </button>
  );
}