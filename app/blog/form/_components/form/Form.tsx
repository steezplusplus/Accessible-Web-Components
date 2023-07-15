
// TODO Add reveal password button by swapping type="password" with type="text", toggle aria-pressed and styling
export function Form() {
  return (
    <form className="flex flex-col gap-y-2">
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