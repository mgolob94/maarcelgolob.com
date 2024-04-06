// components/CookieConsentBanner.js
import { useEffect, useState } from 'react';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('cookie-consent', consent);
    setIsVisible(false);
    // Update consent in the data layer
    window.dataLayer.push({
      event: 'gtm_consent_update',
      'ad_storage': consent === 'granted' ? 'granted' : 'denied',
      'analytics_storage': consent === 'granted' ? 'granted' : 'denied',
    });
  };

  if (!isVisible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', backgroundColor: '#f8f9fa', textAlign: 'center', zIndex: 1000 }}>
      <p>We use cookies to improve your experience. Do you accept?</p>
      <button onClick={() => handleConsent('granted')}>Accept</button>
      <button onClick={() => handleConsent('denied')}>Reject</button>
    </div>
  );
};

export default CookieConsentBanner;
