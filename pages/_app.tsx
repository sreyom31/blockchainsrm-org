// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blockchain Club SRM</title>
        <meta name="title" content="Blockchain Club SRM" />
        <meta
          name="description"
          content="Pioneer student-led blockchain-centered community to foster young and inquisitive minds, that believe in implementing concepts of Web3 and Decentralization while educating students about Fundamentals and technical aspects of Trading"
        />

        <meta
          name="keywords"
          content="blockchain club srm blockchainsrm blockchainclubsrm clubsrm blockchainclub"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blockchainsrm.org/" />
        <meta property="og:title" content="Blockchain Club SRM" />
        <meta
          property="og:description"
          content="Pioneer student-led blockchain-centered community to foster young and inquisitive minds, that believe in implementing concepts of Web3 and Decentralization while educating students about Fundamentals and technical aspects of Trading"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/SxXxxdRH/official-Full.png"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Blockchain Club SRM" />
        <meta property="og:image:alt" content="Blockchain Club SRM" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.blockchainsrm.org/" />
        <meta property="twitter:title" content="Blockchain Club SRM" />
        <meta
          property="twitter:description"
          content="Pioneer student-led blockchain-centered community to foster young and inquisitive minds, that believe in implementing concepts of Web3 and Decentralization while educating students about Fundamentals and technical aspects of Trading"
        />
        <meta
          property="twitter:image"
          content="https://i.postimg.cc/SxXxxdRH/official-Full.png"
        />
        <meta name="twitter:image:alt" content="Blockchain Club SRM" />

        <link rel="icon" href="https://i.postimg.cc/zXkXWWpX/official.png" />
        <link rel="canonical" href="https://www.blockchainsrm.org/" />
        <link
          rel="apple-touch-icon"
          href="https://i.postimg.cc/zXkXWWpX/official.png"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
