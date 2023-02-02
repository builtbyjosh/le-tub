// import '@/styles/globals.css';
import '@fontsource/tangerine';
import '@fontsource/roboto';
import type { AppProps } from 'next/app';
import { customTheme } from '../styles/theme/index';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
