import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="overflow-hidden bg-bghome bg-fixed h-screen relative">
      <Head>
        <title>BLOCKCHAINSRM | Home</title>
      </Head>
      <Navbar />
    </div>
  );
}
