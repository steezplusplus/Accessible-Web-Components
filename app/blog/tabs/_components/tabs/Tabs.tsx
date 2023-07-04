import React, { useState } from 'react';

export type TabsProps = {
  title: string;
  tabs: TabProps[];
}

export type TabProps = {
  title: string;
  content: string;
}

export function Tabs(props: TabsProps) {
  const { title, tabs } = props;
  const [selectedTab, setSelectedTab] = useState<string>('#section-0');

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault(); // Prevent scroll hop
      const clickedTabId = e.target.getAttribute('href') as string;
      setSelectedTab(clickedTabId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
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

  const moveLeft = () => {
    // TODO
  };

  const moveRight = () => {
    // TODO
  };

  return (
    <div className="rounded border border-black bg-slate-200 p-2">
      <h2 id="tabs-title" className="mb-2 text-3xl">{title}</h2>

      <div onClick={handleClick} onKeyDown={handleKeyDown}>
        <ul className="mb-1 flex gap-x-2" aria-labelledby="tabs-title" role="tablist">
          {tabs.map((tab, i) => {
            const { title } = tab;
            const isSelected = selectedTab === `#section-${i}`;
            return (
              <li key={`tab-${i}`} role="presentation">
                <a
                  className="focus:text-violet-400 aria-selected:underline"
                  id={`tab-${i}`}
                  href={`#section-${i}`}
                  tabIndex={isSelected ? 0 : -1}
                  aria-selected={isSelected}
                  role="tab"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        {tabs.map((tab, i) => {
          const { content } = tab;
          const isSelected = selectedTab === `#section-${i}`;
          return (
            <section
              className={isSelected ? '' : 'hidden'}
              id={`section-${i}`}
              tabIndex={0}
              aria-labelledby={`tab-${i}`}
              role="tabpanel"
              key={`section-${i}`}
            >
              {content}
            </section>
          );
        })}
      </div>
    </div>
  );
}