import Header from '../components/Header';
import '../styles/globals.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className='min-h-screen bg-gray-100'>
        <Head></Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
