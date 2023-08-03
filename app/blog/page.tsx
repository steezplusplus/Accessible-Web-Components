import { Article } from './_components/article/Article';
import { Header } from './_components/header/Header';

export const metadata = {
  title: 'Accessible Web Components | Blog',
  description: 'Supporting resources to make the web accessible',
};

export default async function Blog() {
  const tabsDescription = 'Navigational element enabling switching between multiple content sections within the same interface.';
  const accordionDescrpition = 'Collapsible sections to display content in a compact and organized manner.';
  const modalDescription = 'Interruptive pop-up which does not allow the user to interact with primary window.';
  const dialogDescription = 'Interruptive pop-up that includes user information that is not urgent.';
  const alertDialogDescription = 'A modal dialog, specifically for displaying critical information or warnings to the user.';
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
