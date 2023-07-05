import { Pagination } from './_components/pagination/Pagination';
import { Article } from './_components/article/Article';
import { Header } from './_components/header/Header';

export const metadata = {
  title: 'Steez++ | Blog',
  description: 'Steezy',
};

export default async function Blog() {
  // const placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const tabsDescription = 'Tabs are a horizontal set of controls associated with a panel that will display one panel of content at a time.';
  const accordionDescrpition = 'Accordions are a vertical set of controls associated with a panel that will display one panel of content at a time.';
  const modalDescription = 'A Modal overlays the primary window with a modal window, where the modal window does not allow the user to interact with primary window.';
  const dialogDescription = 'A Dialog overlays the primary window with a dialog window, where the dialog window and primary window can simultaneously be interacted with by the user.';

  return (
    <>
      <Header />
      <section className="grid gap-10 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article title="Tabs with Automatic Activation" description={tabsDescription} slug="tabs" />
        <Article title="Dialog" description={dialogDescription} slug="dialog" />
        <Article title="Modal" description={modalDescription} slug="modal" />
        <Article title="Accordion" description={accordionDescrpition} slug="accordion" />
      </section>
      <Pagination />
    </>
  );
}
