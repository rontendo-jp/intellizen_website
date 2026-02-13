import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Component';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { PropertySapporo } from './pages/PropertySapporo';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

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
