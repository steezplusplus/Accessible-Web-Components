import { RegistrationForm } from './_components/registrationForm/RegistrationForm';


export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <h1>Registration Form</h1>
        <ol>
          <li>Labels always above inputs</li>
          <li>Does not use placeholders</li>
          <li>Hints for the user are included inside the label</li>
          <li>Button toggles password visibility</li>
        </ol>
        <p>
          On MacOs, press Shift + F5 to enable VoiceOver and try it for yourself.
        </p>
      </article>
      <div className="my-4 flex flex-col items-center justify-center">
        <h2 className="text-xl">Registration</h2>
        <RegistrationForm />
      </div>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <p>
          1. Positioning of the label is an important consideration and may depend on your branding.
          However, it is best to put the label above the input they are associated with.
          This is because on small viewports there will always be more space on the y-axis, but not the x-axis.
          And on large viewports, if a user zooms in, there is a chance that the text disappears.
        </p>
        <p>
          2. Placeholders are often used to provide an extra hint to the user, however they have many issues.
          First, they tend to have good color contrast, so its hard to read. When many placeholders are present, they clutter the page.
          When some inputs have placeholders and others do not, the user may confuse the placeholder with an actual value.
          It the user needs extra information, include it inside the label.
        </p>
        <p>
          3. If a form field requires extra information, place it inside the label inside a span so it can be styled seperately.
        </p>
        <p>
          4. The same could be achieved with a checkbox, however checkboxes are used for inputting data.
          Instead, I used a button element and toggle its state with <i>aria-pressed</i>.
        </p>
      </article>
    </>
  );
}
