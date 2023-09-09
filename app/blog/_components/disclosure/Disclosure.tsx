import React from 'react';

export type DisclosureProps = {
  label: string;
  handleClick: () => void;
};

export function Disclosure(props: DisclosureProps) {
  const { label, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className="rounded border bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
    >
      {label}
    </button>
  );
}
