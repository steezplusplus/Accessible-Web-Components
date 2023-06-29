'use client';

import React from 'react';

const tabsProps: TabsProps = {
  tabId: 'tabId',
  tabs: [
    {
      name: 'tab 1',
      section: <p>section 1</p>,
    },
    {
      name: 'tab 2',
      section: <p>section 2</p>,
    },
    {
      name: 'tab 3',
      section: <p>section 3</p>,
    },
  ],
};

export default function Page() {
  return (
    <Tabs {...tabsProps} />
  );
}

type TabsProps = {
  tabId: string;
  tabs: {
    name: string;
    section: React.ReactNode;
  }[];
};

// TODO SHOW SECTION
function Tabs(props: TabsProps) {
  const { tabId, tabs } = props;
  return (
    <ul>
      {
        tabs.map((tab, i) => {
          const { name, section } = tab;
          return (
            <li key={`${name}-${i}`}>
              <label>
                {name}
                <input type="radio" name={tabId} />
              </label>
            </li>
          );
        })
      }
    </ul>
  );
}