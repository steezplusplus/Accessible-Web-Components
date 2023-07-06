import { Switch } from './_components/switch/Switch';

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Switch</h1>
          <p>
            A Switch is similar to a checkbox in that there there are two possible states, thus making them functionally interchangable.
            The difference is a switch is <i>on</i> or <i>off</i>, while a checkbox is <i>checked</i> or <i>unchecked</i>.
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