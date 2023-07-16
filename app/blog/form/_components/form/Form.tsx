'use client';

import { useState } from 'react';

// TODO Style pressed state of button
export function Form() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="flex flex-col gap-y-3">

      <div className="flex flex-col gap-y-0.5">
        <label htmlFor="email">
          Email
        </label>
        <input id="email" type="email" name="email"></input>
      </div>

      <div className="flex flex-col gap-y-0.5">
        <label htmlFor="password">
          <div>Choose password</div>
          <div className="text-xs" >Must contain 8+ characters with at least 1 number and 1 uppercase letter.</div>
        </label>
        <div className="flex">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            className="flex-1"
          />
          <button
            type="button"
            aria-pressed={showPassword}
            onClick={handleShowPassword}
            className="bg-emerald-600 px-2 py-1 text-white hover:bg-emerald-700"
          >
            Show Password
          </button>
        </div>
      </div>

      <button
        className="rounded border bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
      >
        Submit
      </button>

    </form>
  );
}