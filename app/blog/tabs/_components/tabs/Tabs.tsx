import React, { useState, useRef } from 'react';

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
  const tabsRef = useRef<HTMLUListElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('click');
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault(); // Prevent scroll hop
      const clickedTabId = e.target.getAttribute('href') as string;
      setSelectedTab(clickedTabId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('key down');
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
    const currentTabIndex = parseInt(selectedTab.charAt(selectedTab.length - 1));
    let newTabIndex;
    if (currentTabIndex === 0) {
      newTabIndex = tabs.length - 1;
    } else {
      newTabIndex = currentTabIndex - 1;
    }

    const newTabKey = `#section-${newTabIndex}`;
    const newTabElement = tabsRef.current?.querySelector(`a[href="${newTabKey}"]`) as HTMLAnchorElement;
    setSelectedTab(newTabKey);
    newTabElement.focus();
  };

  const moveRight = () => {
    const currentTabIndex = parseInt(selectedTab.charAt(selectedTab.length - 1));
    let newTabIndex;
    if (currentTabIndex === tabs.length - 1) {
      newTabIndex = 0;
    } else {
      newTabIndex = currentTabIndex + 1;
    }

    const newTabKey = `#section-${newTabIndex}`;
    const newTabElement = tabsRef.current?.querySelector(`a[href="${newTabKey}"]`) as HTMLAnchorElement;
    setSelectedTab(newTabKey);
    newTabElement.focus();
  };

  return (
    <div className="rounded border border-black bg-slate-200 p-2" onClick={handleClick} onKeyDown={handleKeyDown}>
      <h2 id="tabs-title" className="mb-2 text-3xl">{title}</h2>

      <div>
        <ul className="mb-1 flex gap-x-2" aria-labelledby="tabs-title" role="tablist" ref={tabsRef}>
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