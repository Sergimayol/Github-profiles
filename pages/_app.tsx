import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>GitHub profiles</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
