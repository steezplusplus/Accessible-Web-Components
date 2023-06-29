import { Pagination } from './_components/pagination/Pagination';
import { Article } from './_components/article/Article';
import { Header } from './_components/header/Header';

export const metadata = {
  title: 'Steez++ | Blog',
  description: 'Steezy',
};

export default async function Blog() {
  const placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <>
      <Header />
      <section className="grid gap-10 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article title="Accessible Buttons" description={placeholderDescription} slug="buttons" />
        <Article title="Accessible Checkboxes" description={placeholderDescription} slug="checkboxes" />
        <Article title="Accessible Radios" description={placeholderDescription} slug="radios" />
        <Article title="Accessible Tabs" description={placeholderDescription} slug="tabs" />
        <Article title="Accessible Modal" description={placeholderDescription} slug="modal" />
        <Article title="Accessible Alert" description={placeholderDescription} slug="alert" />
      </section>
      <Pagination />
    </>
  );
}
