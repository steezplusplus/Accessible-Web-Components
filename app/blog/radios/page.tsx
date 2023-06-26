"use client";

import Radio from './radio.mdx';

export default function Page() {
  return (
    <>
      <h1>Radio</h1>
      <Radio />
      <fieldset>
        <label>
          1
          <input type="radio" name="name" />
        </label>
        <label>
          2
          <input type="radio" name="name" />
        </label>
        <label>
          3
          <input type="radio" name="name" />
        </label>
      </fieldset>
    </>
  );
}