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
      {panels.map((panel) => {
        const { key, label, children } = panel;
        return (
          <div key={key} onClick={handleClick} onKeyDown={handleKeyDown}>
            <h2>
              <button>{label}</button>
            </h2>
            <section>
              {children}
            </section>
          </div>
        );
      })}
    </div>
  );
}