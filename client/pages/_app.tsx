import { ApolloProvider } from "@apollo/client";
import client from "../lib//apollo-client";
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';
import { Navigation } from '../components';
import { AppContainer } from '../Styles';

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: CustomAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <AppContainer maxWidth='xl'>
            <Component {...pageProps} />
          </AppContainer>
        </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

