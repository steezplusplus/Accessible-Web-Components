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

export function Accordion({ panels }: AccordionProps) {
  const [expandedPanelIndex, setExpandedPanelIndex] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedPanelHeader = e.target as HTMLButtonElement;
    const clickedPanelIndex = parseInt(clickedPanelHeader.getAttribute('data-index') as string);
    if (clickedPanelIndex === expandedPanelIndex) {
      setExpandedPanelIndex(null);
    } else {
      setExpandedPanelIndex(clickedPanelIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const enteredPanelHeader = e.target as HTMLButtonElement;
      const enteredPanelIndex = parseInt(enteredPanelHeader.getAttribute('data-index') as string);
      if (enteredPanelIndex === expandedPanelIndex) {
        setExpandedPanelIndex(null);
      } else {
        setExpandedPanelIndex(enteredPanelIndex);
      }
    }
  };

  return (
    <div
      className="flex w-full max-w-xl flex-col gap-y-1 rounded border border-black bg-emerald-100 p-2"
    >
      {
        panels.map((panel, index) => {
          const { header, content } = panel;
          const isExpanded = index === expandedPanelIndex;
          return (
            <div key={index}>
              <h2 className="rounded border border-black hover:cursor-pointer">
                <button
                  className="flex w-full items-center px-2 py-1"
                  aria-expanded={isExpanded}
                  aria-controls={`content-${index}`}
                  id={`header-${index}`}
                  data-index={index}
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                >
                  <span className="mr-4 text-3xl font-semibold">{header}</span>
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