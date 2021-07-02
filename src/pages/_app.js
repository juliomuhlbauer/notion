import Head from "next/head";

import "../styles/globals.css";
import "react-notion-x/src/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
