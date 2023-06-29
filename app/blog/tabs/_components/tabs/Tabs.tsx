import React, { useState } from 'react';

export type TabsProps = {
  title: string;
  tabs: {
    title: string;
    content: string;
  }[];
}

export function Tabs(props: TabsProps) {
  const { title, tabs } = props;
  const [selectedTab, setSelectedTab] = useState<string>('#section-0');

  // TODO Can I move the onlick to the anchor?
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault();
      const clickedTabId = e.target.getAttribute('href') as string;
      setSelectedTab(clickedTabId);
    }
  };

  return (
    <div>
      <h2 id="tabs-title">{title}</h2>

      <div onClick={handleClick}>
        <ul aria-labelledby="tabs-title" role="tablist">
          {tabs.map((tab, i) => {
            const isSelected = selectedTab === `#section-${i}`;
            return (
              <li key={`tab-${i}`} role="presentation">
                <a
                  id={`tab-${i}`}
                  href={`#section-${i}`}
                  tabIndex={isSelected ? undefined : -1}
                  aria-selected={isSelected}
                  role="tab"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div>
          {tabs.map((tab, i) => {
            const isSelected = selectedTab === `#section-${i}`;
            return (
              <section
                key={`section-${i}`}
                id={`section-${i}`}
                className={isSelected ? '' : 'hidden'}
                aria-labelledby={`tab-${i}`}
                role="tabpanel"
                tabIndex={0}
              >
                {tab.content}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}