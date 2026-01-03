import React from 'react';
import { Building, Truck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">{t.services.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      {/* Real Estate Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block p-3 bg-secondary rounded-lg mb-6">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">{t.services.realEstate.title}</h2>
              <h3 className="text-xl text-accent mb-6 font-light">{t.services.realEstate.tagline}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.services.realEstate.desc}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {t.services.realEstate.links?.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors underline underline-offset-4"
                  >
                    {link.label}
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                ))}
              </div>
              
              <ul className="space-y-4">
                {t.services.realEstate.list.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1767389784650-d0bef796/__-8.jpg" 
                alt="Real Estate Investment" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Import Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1767389870841-a28d8280/IM4_8760s.jpg" 
                alt="Global Import Products" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block p-3 bg-primary text-white rounded-lg mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">{t.services.import.title}</h2>
              <h3 className="text-xl text-accent mb-6 font-light">{t.services.import.tagline}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t.services.import.desc}
              </p>
              
              <ul className="space-y-4">
                {t.services.import.list.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}