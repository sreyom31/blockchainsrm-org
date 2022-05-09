import Head from 'next/head';
import About from '../components/home/about';
import Events from '../components/home/events';
import Landing from '../components/home/landing';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="overflow-hidden bg-bghome bg-no-repeat relative bg-cover bg-fixed">
      <Head>
        <title>BLOCKCHAINSRM | Home</title>
      </Head>
      <Navbar />
      <Landing />
      <About />
      <Events />
    </div>
  );
}
