'use client';

import React, { useState } from 'react';

export type FormState = {
  email: string;
  password: string;
}

const initFormState: FormState = {
  email: '',
  password: '',
};

export function RegistrationForm() {
  const [formState, setFormState] = useState<FormState>(initFormState);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // TODO On error, update the page title. Give an error summary at the top of the page
  const handleValidateForm = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formState);
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-y-3" onSubmit={(e) => handleValidateForm(e)}>

      <div className="flex flex-col gap-y-0.5">
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            setFormState((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
      </div>

      <div className="flex flex-col gap-y-0.5">
        <label htmlFor="password">
          <div>Choose password</div>
          <div className="text-xs">Must contain 8+ characters with at least 1 number and 1 uppercase letter.</div>
        </label>
        <div className="flex">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            className="flex-1"
            onChange={(e) => {
              setFormState((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
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
        Join
      </button>

    </form>
  );
}