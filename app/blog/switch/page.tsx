import { Switch } from './_components/switch/Switch';

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Switch</h1>
          <p>
            TODO
          </p>
        </header>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex items-center justify-center">
        <Switch />
      </div>
    </>
  );
}