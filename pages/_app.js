import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />

        <meta property="og:title" content="Indian Express" />
        <meta
          property="og:description"
          content="Get the latest news of whole country."
        />
        <meta
          property="og:image"
          content="https://timesofindia.indiatimes.com/thumb/msid-81923706,width-1200,height-900,resizemode-4/81923706.jpg"
        />
        <meta property="og:url" content="https://news-page.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
