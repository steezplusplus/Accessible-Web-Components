import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { JSX, useState, useRef } from 'react';

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
  const [expandedPanel, setExpandedPanel] = useState<string>('');
  const panelsRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLButtonElement) {
      const clickedPanelKey = e.target.getAttribute('data-key') as string;
      if (clickedPanelKey === expandedPanel) {
        setExpandedPanel('');
      } else {
        setExpandedPanel(clickedPanelKey);
      }
    }
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
        // TODO expand and focus first panel
        break;
      case 'End':
        e.preventDefault();
        // TODO expand and focus last panel
        break;
      case 'Enter':
        e.preventDefault();
        // TODO Open panel
        break;
    }
  };

  const moveUp = () => {
    console.log('move up');
    // TODO expand and focus upper panel
  };

  const moveDown = () => {
    console.log('move down');
    // TODO expand and focus lower panel
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
          const ariaExpanded = key === expandedPanel;
          return (
            <div key={key} ref={panelsRef}>
              <h2 className="rounded border border-black hover:cursor-pointer">
                <button
                  className="flex w-full items-center px-1"
                  aria-expanded={ariaExpanded}
                  data-key={key}
                >
                  <span>{label}</span>
                  <FontAwesomeIcon
                    icon={ariaExpanded ? faArrowAltCircleUp : faArrowAltCircleDown}
                    className="ml-auto"
                  />
                </button>
              </h2>
              <section className={ariaExpanded ? '' : 'hidden'}>
                {children}
              </section>
            </div>
          );
        })}
    </div>
  );
}