import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Component';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { PropertySapporo } from './pages/PropertySapporo';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Analytics tracking component
function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Inject gtag script if it doesn't exist
    if (!document.getElementById('gtag-script')) {
      const script = document.createElement('script');
      script.id = 'gtag-script';
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-63MSEQ98JN';
      document.head.appendChild(script);

      const configScript = document.createElement('script');
      configScript.id = 'gtag-config';
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-63MSEQ98JN');
        gtag('config', 'AW-17968891765');
      `;
      document.head.appendChild(configScript);
    }
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (window.gtag) {
      window.gtag('config', 'G-63MSEQ98JN', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();
  const { setLang } = useLanguage();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Sync language with URL query param if present
  React.useEffect(() => {
    const params = new URLSearchParams(search);
    const langParam = params.get('lang')?.toUpperCase();
    if (langParam === 'EN' || langParam === 'JP') {
      setLang(langParam as 'EN' | 'JP');
    }
  }, [search, setLang]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <GoogleAnalytics />
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/property-sapporo" element={<PropertySapporo />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  );
}
