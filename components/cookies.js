// components/CookieBanner.js
import { useEffect, useState } from 'react';
import { initGTM } from '../lib/gtm';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('user-consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('user-consent', consent);
    setIsVisible(false);
    initGTM(); // Re-initialize GTM with updated consent
    window.dataLayer.push({
      event: 'consentUpdate',
      'ad_storage': consent ? 'granted' : 'denied',
      'analytics_storage': consent ? 'granted' : 'denied',
    });
  };

  if (!isVisible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', background: 'lightgrey', padding: '20px', textAlign: 'center' }}>
      <p>We use cookies for analytics and advertising. Do you accept?</p>
      <button onClick={() => handleConsent(true)}>Accept</button>
      <button onClick={() => handleConsent(false)}>Reject</button>
    </div>
  );
};

export default CookieBanner;
