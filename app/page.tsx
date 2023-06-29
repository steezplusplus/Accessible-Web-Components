import { Services } from './_components/services/Services';
import { Header } from './_components/header/Header';

export default async function Home() {
  return (
    <div>
      <Header />
      <Services />
    </div>
  );
}