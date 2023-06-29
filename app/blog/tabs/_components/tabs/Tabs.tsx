import React, { useState } from 'react';

export type TabsProps = {
  title: string;
  tabs: {
    title: string;
    content: string;
  }[];
}

// TODO Have to use a ref to focus
export function Tabs(props: TabsProps) {
  const { title, tabs } = props;
  const [selectedTab, setSelectedTab] = useState<string>('#section-0'); // TODO can maybe use active element?

  // TODO Can I move the onlick to the anchor?
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault();
      const clickedTabId = e.target.getAttribute('href') as string;
      setSelectedTab(clickedTabId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowLeft':
        moveLeft(e);
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

  const moveLeft = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const selectedTabIndex = +selectedTab.charAt(selectedTab.length - 1);
    if (selectedTabIndex === 0) {
      setSelectedTab(`#section-${tabs.length - 1}`);
    } else {
      setSelectedTab(`#section-${selectedTabIndex - 1}`);
    }
    // Should focus?
  };

  const moveRight = () => {
    const selectedTabIndex = +selectedTab.charAt(selectedTab.length - 1);
    if (selectedTabIndex === tabs.length - 1) {
      setSelectedTab('#section-0');
    } else {
      setSelectedTab(`#section-${selectedTabIndex + 1}`);
    }
  };

  return (
    <div>
      <h2 id="tabs-title">{title}</h2>

      <div onClick={handleClick} onKeyDown={handleKeyDown}>
        <ul className="relative" aria-labelledby="tabs-title" role="tablist">
          {tabs.map((tab, i) => {
            const { title, content } = tab;
            const isSelected = selectedTab === `#section-${i}`;
            return (
              <li key={`tab-${i}`} role="presentation">
                <a
                  className="peer focus:text-violet-400 aria-selected:underline"
                  id={`tab-${i}`}
                  href={`#section-${i}`}
                  tabIndex={isSelected ? 0 : -1}
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