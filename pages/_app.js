import Header from '../components/Header';
import '../styles/globals.css';
import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Head></Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
