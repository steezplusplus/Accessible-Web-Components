import { Form } from './_components/form/Form';


export default function Page() {
  return (
    <>
      <article className="prose mx-auto my-8 md:prose-lg lg:prose-xl">
        <h1>Form</h1>
        <p>
          TODO
        </p>
      </article>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl">Registration</h2>
        <Form />
      </div>
    </>
  );
}
