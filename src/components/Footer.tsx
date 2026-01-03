import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
          {/* Brand */}
          <div className="max-w-md">
            <img 
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1767338160140-6181d0ea/Screenshot_2026-01-02_at_15.33.29.png" 
              alt="Intellizen" 
              className="h-8 w-auto mb-6 object-contain"
            />
            <p className="text-sm text-gray-400 leading-relaxed mb-6 whitespace-pre-line">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Intellizen.jp
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm tracking-widest mb-6 text-accent">{t.footer.explore}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">{t.hero.cards.realEstate.title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t.hero.cards.import.title}</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">{t.nav.company}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}