export function Tabs() {
  return (
    <div>
      <h2 id="tabs-title">Tab Title</h2>

      <div>
        <ul aria-labelledby="tabs-title">
          <li>
            <a id="tab-1" href="#section1">Tab 1</a>
          </li>
          <li>
            <a id="tab-2" href="#section2">Tab 2</a>
          </li>
          <li>
            <a id="tab-3" href="#section3">Tab 3</a>
          </li>
        </ul>

        <div>
          <section id="section1" aria-labelledby="tab-1">Section 1</section>
          <section id="section2" aria-labelledby="tab-2">Section 2</section>
          <section id="section3" aria-labelledby="tab-3">Section 3</section>
        </div>
      </div>
    </div>
  );
}