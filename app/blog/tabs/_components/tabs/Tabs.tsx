export type TabsProps = {
  title: string;
  tabs: {
    title: string;
    content: string;
  }[];
}

export function Tabs(props: TabsProps) {
  const { title, tabs } = props;

  return (
    <div>
      <h2 id="tabs-title">{title}</h2>

      <div>
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