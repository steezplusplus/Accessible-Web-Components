import React from 'react';

export type AccordionProps = {}

export function Accordion(props: TabsProps) {

  const handleClick = () => { };

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

  const moveUp = () => { };

  const moveDown = () => { };

  return (
    <div>
      placeholder
    </div>
  );
}