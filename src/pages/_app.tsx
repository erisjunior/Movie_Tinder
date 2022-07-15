import type { AppProps } from 'next/app';
import Head from 'next/head';

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

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
