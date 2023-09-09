import { Switch } from './_components/switch/Switch';

export const metadata = {
  title: 'Accessible Web Components | Switch',
  description: 'Supporting resources to make the web accessible',
};

export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <header>
          <h1>Switch</h1>
          <p>
            A Switch is similar to a checkbox in that there there are two
            possible states, thus making them functionally interchangable. The
            difference is a switch is <i>on</i> or <i>off</i>, while a checkbox
            is <i>checked</i> or <i>unchecked</i>.
          </p>
          <p>
            Press Tab and Shift+Tab to focus the select, then press either Enter
            or Space to interact with it.
          </p>
        </header>
        <p>
          On MacOs, press CMD + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <Switch label="Label 1" />
        <Switch label="Label 2" />
        <Switch label="Label 3" />
      </div>
    </>
  );
}
