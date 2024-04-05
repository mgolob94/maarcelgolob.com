import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Script from "next/script";
import Layout from "../components/layout";
import CookieBanner from "../components/cookies";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4H80G1XSM6" 
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload"> 
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
            'analytics_storage': 'denied'
        });

          gtag('config', 'G-4H80G1XSM6', {
            page_path: window.location.pathname,
          });
        `}
      </Script> */}

      <CookieBanner />    
      <Component {...pageProps} />
    </>
  );
}
