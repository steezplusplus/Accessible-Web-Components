import { Services } from './_components/services/Services';
import { Header } from './_components/header/Header';

export const metadata = {
  title: 'Accessible Web Components | Homepage',
  description: 'Supporting resources to make the web accessible',
};

export default async function Home() {
  return (
    <>
      <Header />
      <Services />
    </>
  );
}