import { Header } from './_components/header/Header';
import { About } from './_components/about/About';

export const metadata = {
  title: 'Steez++ | About',
  description: 'Supporting resources to make the web accessible',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}
