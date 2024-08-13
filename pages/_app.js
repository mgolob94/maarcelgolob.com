import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { GTM_ID, pageview, initGTM } from "../lib/gtm";
import CookieConsentBanner from "../components/cookies";
import { useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGTM();

    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <CookieConsentBanner />

        <Component {...pageProps} />
      </NextIntlClientProvider>
    </>
  );
}

export default App;
