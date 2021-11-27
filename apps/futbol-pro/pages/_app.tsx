import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {FootballProvider} from "../app/football/useFootball";
import Football from '../app/football/football';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to futbol-pro!</title>
      </Head>
      <div className="app">

        <main>
          <FootballProvider>
            <Component {...pageProps} />
          </FootballProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
