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
        <ul className="relative" aria-labelledby="tabs-title" role="tablist">
          {tabs.map((tab, i) => {
            const { title, content } = tab;
            const isSelected = selectedTab === `#section-${i}`;
            return (
              <li key={`tab-${i}`} role="presentation">
                <a
                  className="peer"
                  id={`tab-${i}`}
                  href={`#section-${i}`}
                  tabIndex={isSelected ? undefined : -1}
                  aria-selected={isSelected}
                  role="tab"
                >
                  {title}
                </a>
                <section
                  key={`section-${i}`}
                  id={`section-${i}`}
                  className="absolute -bottom-6 left-0 peer-aria-[selected=false]:hidden"
                  aria-labelledby={`tab-${i}`}
                  role="tabpanel"
                  tabIndex={0}
                >
                  {content}
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}