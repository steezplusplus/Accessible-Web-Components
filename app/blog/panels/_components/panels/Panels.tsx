import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { JSX } from 'react';

export type PanelProps = {
  key: string;
  label: string;
  children: JSX.Element;
};

export type PanelsProps = {
  panels: PanelProps[];
};

export function Panels(props: PanelsProps) {
  const { panels } = props;

  const handleClick = () => {
    console.log('click');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      case 'Home':
        e.preventDefault();
        // TODO select first tab
        break;
      case 'End':
        e.preventDefault();
        // TODO select last tab
        break;
    }
  };

  const moveUp = () => {
    console.log('move up');
  };

  const moveDown = () => {
    console.log('move down');
  };

  return (
    <div
      className="rounded border border-black bg-slate-200 p-2"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {
        panels.map((panel) => {
          const { key, label, children } = panel;
          return (
            <div key={key} >
              <h2 className="rounded border border-black hover:cursor-pointer">
                <button className="flex w-full items-center px-1">
                  <span>{label}</span>
                  <FontAwesomeIcon icon={faArrowAltCircleDown} className="ml-auto" />
                </button>
              </h2>
              <section className="prose hidden">
                {children}
              </section>
            </div>
          );
        })}
    </div>
  );
}