'use client';

import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { JSX, useState } from 'react';

export type PanelProps = {
  header: string;
  content: JSX.Element;
};

export type AccordionProps = {
  panels: PanelProps[];
};

// TODO Rename to "Accordion", each accordion contains a header and panel
// TODO Break into seperate components
// TODO Move event handlers to listen to the button element
export function Accordion(props: AccordionProps) {
  const { panels } = props;
  const [expandedPanelIndex, setExpandedPanelIndex] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLButtonElement) {
      const clickedPanelIndex = parseInt(e.target.getAttribute('data-index') as string);
      if (clickedPanelIndex === expandedPanelIndex) {
        setExpandedPanelIndex(null);
      } else {
        setExpandedPanelIndex(clickedPanelIndex);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        if (e.target instanceof HTMLButtonElement) {
          const clickedPanelIndex = parseInt(e.target.getAttribute('data-index') as string);
          if (clickedPanelIndex === expandedPanelIndex) {
            setExpandedPanelIndex(null);
          } else {
            setExpandedPanelIndex(clickedPanelIndex);
          }
        }
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
        panels.map((panel, index) => {
          const { header, content } = panel;
          const isExpanded = index === expandedPanelIndex;
          return (
            <div key={index}>
              <h2 className="rounded border border-black hover:cursor-pointer">
                <button
                  className="flex w-full items-center px-1"
                  aria-expanded={isExpanded}
                  aria-controls={`content-${index}`}
                  id={`header-${index}`}
                  data-index={index}
                >
                  <span>{header}</span>
                  <FontAwesomeIcon
                    className="ml-auto"
                    icon={isExpanded ? faArrowAltCircleUp : faArrowAltCircleDown}
                  />
                </button>
              </h2>
              <div
                hidden={!isExpanded}
                aria-labelledby={`header-${index}`}
                id={`content-${index}`}
                role="region"
              >
                {content}
              </div>
            </div>
          );
        })}
    </div>
  );
}