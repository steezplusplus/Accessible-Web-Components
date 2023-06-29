import { Header } from './_components/header/Header';
import { About } from './_components/about/About';

export const metadata = {
  title: 'Steez++ | About',
  description: 'Steezy',
};


export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}
