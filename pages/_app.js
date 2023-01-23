import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Script from "next/script";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-38046286-1"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-38046286-1');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
