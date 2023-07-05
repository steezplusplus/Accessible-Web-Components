import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { JSX, useState, useRef } from 'react';

export type PanelProps = {
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
      case 'Enter':
        e.preventDefault();
        // TODO Open panel
        break;
    }
  };

  return (
    <div
      className="rounded border border-black bg-slate-200 p-2"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {
        panels.map((panel, key) => {
          const { label, children } = panel;
          const ariaExpanded = `${key}` === expandedPanel;
          return (
            <div key={key} ref={panelsRef}>
              <h3 className="rounded border border-black hover:cursor-pointer">
                <button
                  className="flex w-full items-center px-1"
                  aria-expanded={ariaExpanded}
                  data-key={key}
                  id={`panel-${key}`}
                >
                  <span>{label}</span>
                  <FontAwesomeIcon
                    icon={ariaExpanded ? faArrowAltCircleUp : faArrowAltCircleDown}
                    className="ml-auto"
                  />
                </button>
              </h3>
              <div
                className={ariaExpanded ? '' : 'hidden'}
                aria-labelledby={`panel-${key}`}
              >
                {children}
              </div>
            </div>
          );
        })}
    </div>
  );
}