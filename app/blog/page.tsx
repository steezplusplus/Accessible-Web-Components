// import { Pagination } from './_components/pagination/Pagination'; // TODO or lazy load?
import { Article } from './_components/article/Article';
import { Header } from './_components/header/Header';

export const metadata = {
  title: 'Steez++ | Blog',
  description: 'Supporting resources to make the web accessible',
};

export default async function Blog() {
  const tabsDescription = 'Tabs are a horizontal set of controls associated with a panel that will display one panel of content at a time.';
  const accordionDescrpition = 'Accordions are a vertical set of controls associated with a panel that will display one panel of content at a time.';
  const modalDescription = 'A Modal overlays the primary window with a modal window which does not allow the user to interact with primary window.';
  const dialogDescription = 'A Modal Dialog overlays the primary window with a dialog window which allows the user to interact with either window.';
  const alertDialogDescription = 'An Alert Dialog overlays the primary window which does not allow the user to interact with the primary window.';
  const switchDescription = 'A switch allows a user to toggle between one of two possible states: on & off.';


  return (
    <>
      <Header />
      <ul className="grid gap-10 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Article title="Non-Modal Dialog" description={dialogDescription} slug="non-modal-dialog" />
        <Article title="Modal Dialog" description={modalDescription} slug="modal-dialog" />
        <Article title="Alert Dialog" description={alertDialogDescription} slug="alert-dialog" />
        <Article title="Accordion" description={accordionDescrpition} slug="accordion" />
        <Article title="Tabs with Automatic Activation" description={tabsDescription} slug="tabs" />
        <Article title="Switch" description={switchDescription} slug="switch" />
      </ul>
    </>
  );
}
