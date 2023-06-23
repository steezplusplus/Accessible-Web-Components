import { Pagination } from "./_components/pagination/Pagination";
import { Article } from "./_components/article/Article";
import { Header } from "./_components/header/Header";

export default async function Blog() {
  const placeholderDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <>
      <Header />
      <section className="grid gap-10 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article title="Accessible Buttons" description={placeholderDescription} slug="0" />
        <Article title="Accessible Checkboxes" description={placeholderDescription} slug="1" />
        <Article title="Accessible Radios" description={placeholderDescription} slug="2" />
        <Article title="Accessible Inputs" description={placeholderDescription} slug="3" />
        <Article title="Accessible Anchors" description={placeholderDescription} slug="4" />
        <Article title="Accessible Images" description={placeholderDescription} slug="5" />
        <Article title="Accessible Videos" description={placeholderDescription} slug="6" />
        <Article title="Accessible Hide & Show" description={placeholderDescription} slug="7" />
        <Article title="Accessible Dialogs" description={placeholderDescription} slug="8" />
      </section>

      <Pagination />
    </>
  );
}
