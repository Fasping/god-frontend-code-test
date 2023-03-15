import React from 'react';
import { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';

import '../public/css/styles.css';
import Head from 'next/head';

const HomePage = ({ Component, pageProps }: AppProps) => (
  <React.StrictMode>
    <Head>
      <title>Volvo front-end code test</title>
    </Head>
    <StyleProvider>
      <ThemePicker variant='light'>
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  </React.StrictMode>
);

export default HomePage;