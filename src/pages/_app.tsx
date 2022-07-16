import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '../components/layout';
import { Provider } from '../context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <title>Movie Tinder</title>
        <meta name="description" content="Curadoria de filmes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
