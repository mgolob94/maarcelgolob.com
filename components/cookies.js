// components/CookieConsentBanner.js
import { useEffect, useState } from 'react';
import { acceptGTM, declineGTM } from '../lib/gtm';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      acceptGTM();
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('cookie-consent', consent);
    setIsVisible(false);

    if(consent === 'granted') {
        acceptGTM();
    } else {
        declineGTM();
    }

    // window.dataLayer.push({
    //   event: 'gtm_consent_update',
    //   'ad_storage': consent === 'granted' ? 'granted' : 'denied',
    //   'analytics_storage': consent === 'granted' ? 'granted' : 'denied',
    // });
  };

  if (!isVisible) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', bottom: 0, width: '100%', padding: '20px', backgroundColor: '#f8f9fa', textAlign: 'center', zIndex: 1000 }}>
      <p className='m-0'>We use cookies to improve your experience. Do you accept?</p>
      <div style={{ marginLeft: '15px'}}>
      <button className='btn-primary-small' onClick={() => handleConsent('granted')}>Accept</button>
      <button className='btn-secondary-small' onClick={() => handleConsent('denied')}>Reject</button>
      </div>
     
    </div>
  );
};

export default CookieConsentBanner;
