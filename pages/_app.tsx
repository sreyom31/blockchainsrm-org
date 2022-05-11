// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/images/logo.ico" />
        <title>BLOCKCHAINSRM</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
