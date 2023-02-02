// import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { customTheme } from '../styles/theme/index'
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
