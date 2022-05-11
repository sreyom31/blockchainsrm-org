import Head from 'next/head';
import About from '../components/home/about';
import Landing from '../components/home/landing';
import Partners from '../components/home/partners';
import Footer from '../components/shared/Footer';
import Layout from '../components/shared/Layout';

export default function Home() {
  return (
    <>
      <Layout className="overflow-hidden bg-bghome bg-no-repeat relative bg-cover bg-fixed">
        <div className="p-4">
          <Landing />
          <About />
          <Partners />
        </div>
        <Footer />
      </Layout>
      {/* <Events /> */}
    </>
  );
}
