import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-screen md:h-screen md:min-h-[700px] flex flex-col md:justify-center items-center pt-32 pb-24 md:py-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1767338617785-9ca7f067/aerial-view-tokyo-cityscape-with-fuji-mountain-japan.jpg" 
            alt="Tokyo Cityscape with Mount Fuji" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white md:mt-[-100px] mb-12 md:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          >
            {t.hero.title}<br />
            <span className="text-accent italic drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]">{t.hero.subtitle}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light tracking-wide mb-12"
          >
            {t.hero.desc}
          </motion.p>
        </div>

        {/* FLOATING CARDS - The "Fork" */}
        <div className="relative md:absolute md:bottom-[-80px] left-0 w-full z-20 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Real Estate Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" className="block group relative bg-card p-10 shadow-xl rounded-sm hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                <Building2 className="text-primary w-12 h-12 mb-6" />
                <h3 className="font-serif text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{t.hero.cards.realEstate.title}</h3>
                <p className="text-muted-foreground mb-6">{t.hero.cards.realEstate.desc}</p>
                <div className="flex items-center text-sm font-bold text-primary tracking-widest uppercase group-hover:text-accent transition-colors">
                  {t.hero.cards.realEstate.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </motion.div>

            {/* Import Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/services" className="block group relative bg-primary text-primary-foreground p-10 shadow-xl rounded-sm hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <Globe2 className="text-black w-12 h-12 mb-6 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                <h3 className="font-serif text-2xl font-bold text-black mb-3 group-hover:text-white transition-colors">{t.hero.cards.import.title}</h3>
                <p className="text-black/80 mb-6">{t.hero.cards.import.desc}</p>
                <div className="flex items-center text-sm font-bold text-black tracking-widest uppercase group-hover:text-white transition-colors">
                  {t.hero.cards.import.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPACER for Floating Cards */}
      <div className="h-32 md:h-40 bg-background" />

      {/* NEWS TICKER (Simple Zen Style) */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <span className="font-serif font-bold text-primary text-lg">{t.news.label}</span>
          <div className="h-8 w-px bg-border hidden md:block" />
          <p className="text-muted-foreground">
            <span className="font-mono text-xs mr-3 text-accent">2026.01.03</span>
            {t.news.item}
          </p>
        </div>
      </section>
    </div>
  );
}