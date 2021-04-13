import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App Platform Resources - DigitalOcean</title>
      </Head>

      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}

export default MyApp;
