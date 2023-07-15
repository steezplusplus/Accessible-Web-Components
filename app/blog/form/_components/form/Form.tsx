
// TODO Add reveal password button
export function Form() {
  return (
    <form className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-0.5">
        <label htmlFor="username">
          Username
        </label>
        <input id="username" type="text" name="username"></input>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <label htmlFor="password">
          <div>Password</div>
          <div className="text-xs" >Must contain 8+ characters with at least 1 number and 1 uppercase letter.</div>
        </label>
        <input id="password" type="password" name="password"></input>
      </div>
      <button
        className="rounded border bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
      >
        Submit
      </button>
    </form>
  );
}