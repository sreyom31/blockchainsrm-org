import Head from 'next/head';
import Landing from '../components/home/landing';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="overflow-hidden bg-bghome bg-fixed relative">
      <Head>
        <title>BLOCKCHAINSRM | Home</title>
      </Head>
      <Navbar />
      <Landing />
    </div>
  );
}
