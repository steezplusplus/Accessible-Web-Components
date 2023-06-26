"use client";

import Checkbox from './checkbox.mdx';

export default function Page() {
  return (
    <>
      <h1>Checkbox</h1>
      <Checkbox />
      <fieldset>
        <label>
          1
          <input type="checkbox" name="name" />
        </label>
        <label>
          2
          <input type="checkbox" name="name" />
        </label>
        <label>
          3
          <input type="checkbox" name="name" />
        </label>
      </fieldset>
    </>
  );
}