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
  const [activeTab, setActiveTab] = useState<string>('#section-0');

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault();
      const activeTabId = e.target.getAttribute('href') as string;
      setActiveTab(activeTabId);
    }
  };

  return (
    <div>
      <h2 id="tabs-title">{title}</h2>

      <div onClick={handleClick}>
        <ul aria-labelledby="tabs-title">
          {tabs.map((tab, i) => {
            const { title } = tab;
            return (
              <li key={`tab-${i}`}>
                <a id={`tab-${i}`} href={`#section-${i}`}>{title}</a>
              </li>
            );
          })}
        </ul>

        <div>
          {tabs.map((tab, i) => {
            const { content } = tab;
            return (
              <section
                className={`${activeTab === `#section-${i}` ? '' : 'hidden'}`}
                key={`section-${i}`}
                id={`section-${i}`}
                aria-labelledby={`tab-${i}`}
              >
                {content}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}