/**
 * Property Details page for the Sapporo Apartment.
 * Showcases features, amenities, and booking information.
 * Layout: Title -> Gallery Grid -> Details
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Wind, 
  Coffee, 
  ShieldCheck, 
  MapPin, 
  BedDouble, 
  Maximize2,
  CheckCircle2,
  Home as HomeIcon,
  Bath,
  CreditCard,
  Grid,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export function PropertySapporo() {
  const { t, lang } = useLanguage();
  const isJP = lang === 'JP';
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Full Image Collection
  const allImages = [
    // Hero / Main
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807807219-b8de891c/1L7A7640.jpg",
    // Floor Plan (Second Image as requested)
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770943083199-ededc44c/____.png",
    // Other Photos
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807803504-2370f7a0/1L7A7723.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807801639-9695d777/1L7A7780.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807801068-acb3cb75/1L7A7791.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807806794-f5fab0dc/1L7A7662.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807807357-c49c4a53/1L7A7645.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807805119-29adeae4/1L7A7694.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807799659-743ce40a/1L7A7827.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807804402-4b2ba8df/1L7A7709.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807802784-7a7e432a/1L7A7749.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807802927-baef5543/1L7A7738.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807805956-8bd6b86d/1L7A7680.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807806512-26909760/1L7A7666.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807801782-44eddd15/1L7A7775.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807806232-24c6b9a7/1L7A7669.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807804982-5387e62d/1L7A7698.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807803211-d37e22d3/1L7A7734.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807803945-b474f83b/1L7A7717.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807800496-aa71f2ec/1L7A7805.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807806656-037f9cdc/1L7A7660.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807799796-ebd6093f/1L7A7821.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807807079-3466a02b/1L7A7648.jpg",
    "https://vgbujcuwptvheijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807803355-5e9ee0fa/1L7A7730.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807805816-be1020e3/1L7A7677.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807804097-17f784d8/1L7A7715.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807800358-be6a6d69/1L7A7808.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807805399-d84c156b/1L7A7686.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807800773-b39a80c7/1L7A7799.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807804692-4b977de8/1L7A7704.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807801920-70f13b87/1L7A7773.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807807496-f52b7835/1L7A7651.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807803658-6a77dc81/1L7A7719.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807806095-5844a884/1L7A7673.jpg",
    "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1770807807636-e9fbb2ff/1L7A7655.jpg"
  ];

  const buildingImage = "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1af87180-f388-40b0-98a3-a44c0095e3ea/1767389784650-d0bef796/__-8.jpg";

  // Grid Images (First 5 for display)
  const gridImages = allImages.slice(0, 5);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const nextPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextPhoto, prevPhoto, closeLightbox]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (lightboxOpen && thumbnailRefs.current[photoIndex]) {
      thumbnailRefs.current[photoIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [photoIndex, lightboxOpen]);

  return (
    <div className="pt-24 min-h-screen bg-[#1a365d] text-[#f5f5f0]">
      
      <div className="container mx-auto px-6 py-8">
        
        {/* 1. Title Section (Top Layout) */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-block py-1 px-3 mb-3 border border-[#c5a065] text-[#c5a065] text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
                  Sapporo / Hokkaido
                </span>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                  {t.sapporo.title}
                </h1>
                <p className="text-lg md:text-xl text-[#f5f5f0]/80 font-light flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#c5a065]" />
                  {t.sapporo.buildingName} <span className="mx-2">|</span> {t.sapporo.address}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Gallery Grid (Curated) */}
        <div className="mb-16">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-2 h-[400px] md:h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Hero Image - Large */}
            <div 
              className="col-span-2 md:col-span-2 md:row-span-2 relative group overflow-hidden cursor-pointer rounded-sm"
              onClick={() => openLightbox(0)}
            >
              <img 
                src={gridImages[0]} 
                alt="Main View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Secondary Images */}
            {gridImages.slice(1).map((img, idx) => (
              <div 
                key={idx} 
                className="relative group overflow-hidden cursor-pointer rounded-sm"
                onClick={() => openLightbox(idx + 1)}
              >
                <img 
                  src={img} 
                  alt={`View ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </motion.div>

          <div className="flex justify-end mt-4">
             <button 
                onClick={() => openLightbox(0)}
                className="flex items-center gap-2 px-6 py-3 bg-[#152a48] border border-[#c5a065]/50 text-[#f5f5f0] hover:bg-[#c5a065] hover:text-[#1a365d] transition-colors rounded-sm text-sm font-bold tracking-widest uppercase"
             >
               <Grid className="w-4 h-4" /> {t.sapporo.viewPhotos || "View All Photos"}
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Key Specs */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#152a48] border border-[#c5a065]/30 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-[#c5a065] mb-2 flex justify-center"><BedDouble size={24} /></div>
                <div className="text-xs uppercase tracking-widest text-[#f5f5f0]/60 mb-1">{isJP ? "間取り" : "Layout"}</div>
                <div className="text-xl font-bold">1LDK</div>
              </div>
              <div className="text-center border-l border-[#c5a065]/20">
                <div className="text-[#c5a065] mb-2 flex justify-center"><Maximize2 size={24} /></div>
                <div className="text-xs uppercase tracking-widest text-[#f5f5f0]/60 mb-1">{isJP ? "面積" : "Area"}</div>
                <div className="text-xl font-bold">50㎡</div>
              </div>
              <div className="text-center border-l border-[#c5a065]/20">
                <div className="text-[#c5a065] mb-2 flex justify-center"><MapPin size={24} /></div>
                <div className="text-xs uppercase tracking-widest text-[#f5f5f0]/60 mb-1">{isJP ? "最寄駅" : "Station"}</div>
                <div className="text-xl font-bold">5 min</div>
              </div>
              <div className="text-center border-l border-[#c5a065]/20">
                <div className="text-[#c5a065] mb-2 flex justify-center"><HomeIcon size={24} /></div>
                <div className="text-xs uppercase tracking-widest text-[#f5f5f0]/60 mb-1">{isJP ? "定員" : "Capacity"}</div>
                <div className="text-xl font-bold">Max 4</div>
              </div>
            </motion.div>

            {/* 2. Narrative Description */}
            <div className="space-y-12">
              <Section 
                title={t.sapporo.details.location.title}
                desc={t.sapporo.details.location.desc}
                delay={0.1}
              />
              <Section 
                title={t.sapporo.details.interior.title}
                desc={t.sapporo.details.interior.desc}
                delay={0.2}
              />
              <Section 
                title={t.sapporo.details.neighborhood.title}
                desc={t.sapporo.details.neighborhood.desc}
                delay={0.3}
              />
              <Section 
                title={t.sapporo.details.security.title}
                desc={t.sapporo.details.security.desc}
                delay={0.4}
              />
            </div>

            {/* 3. Amenities List */}
            <div className="bg-[#f5f5f0] text-[#1a365d] p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">{t.sapporo.amenities.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {t.sapporo.amenities.list.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a065] flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Location / Map */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-[#c5a065]">Location</h3>
              <div className="flex flex-col md:flex-row gap-6 bg-[#152a48] p-6 rounded-sm border border-[#c5a065]/30">
                 <div className="w-full md:w-1/3">
                    <img src={buildingImage} alt="Building Exterior" className="w-full h-48 object-cover rounded-sm mb-4" />
                    <div className="space-y-2 text-sm">
                      <p className="font-bold text-white">{t.sapporo.buildingName}</p>
                      <p className="text-[#f5f5f0]/70">{t.sapporo.address}</p>
                    </div>
                 </div>
                 <div className="w-full md:w-2/3 h-64 md:h-auto rounded-sm overflow-hidden bg-gray-800">
                    <iframe 
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.155700778553!2d141.3697922765371!3d43.03816767113797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2a60b0932827%3A0x6c6d0066266010e9!2s18-ch%C5%8Dme-1-53%20Hiragishi%204%20J%C5%8D%2C%20Toyohira%20Ward%2C%20Sapporo%2C%20Hokkaido%20062-0934!5e0!3m2!1sen!2sjp!4v1714529000000!5m2!1sen!2sjp" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                 </div>
              </div>
            </div>

          </div>

          {/* Sidebar Column - Sticky */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              
              {/* Pricing Card */}
              <div className="bg-[#f5f5f0] text-[#1a365d] p-8 rounded-sm shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a065]\" />
                <h3 className="font-serif text-xl font-bold mb-4">{isJP ? "賃料" : "Rental Price"}</h3>
                <div className="text-3xl font-bold text-[#1a365d] mb-2">{t.sapporo.price}</div>
                <div className="text-sm text-[#1a365d]/70 mb-6 border-b border-[#1a365d]/10 pb-4">
                  {isJP ? "駐車場" : "Parking"}: {t.sapporo.parking}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-bold flex items-center gap-2">
                    <CreditCard className="w-4 h-4" /> {t.sapporo.payment.title}
                  </h4>
                  <p className="text-sm text-[#1a365d]/80 leading-relaxed">
                    {t.sapporo.payment.desc}
                  </p>
                  <p className="text-xs text-[#1a365d]/60 bg-white/50 p-3 rounded-sm">
                    {t.sapporo.payment.methods}
                  </p>
                </div>

                <button 
                  onClick={() => {
                    // @ts-ignore
                    if (window.Tally) {
                      // @ts-ignore
                      window.Tally.openPopup('MezqlY', {
                        layout: 'modal',
                        width: 540,
                        emoji: {
                          text: '🏢',
                          animation: 'wave'
                        }
                      });
                    } else {
                      window.open('https://tally.so/r/MezqlY', '_blank');
                    }
                  }}
                  className="block w-full py-4 bg-[#1a365d] text-white text-center font-bold tracking-widest uppercase hover:bg-[#c5a065] transition-all duration-300 rounded-sm shadow-lg"
                >
                  {t.sapporo.inquire || (isJP ? "お問い合わせ" : "Inquire")}
                </button>
              </div>

              {/* News Section - Only show in English mode */}
              {!isJP && (
                <div className="bg-[#152a48] border border-[#c5a065]/30 p-8 rounded-sm">
                  <h3 className="font-serif text-xl font-bold mb-6 text-[#c5a065] border-b border-[#c5a065]/20 pb-2">
                    {t.sapporo.news?.title || "News"}
                  </h3>
                  <ul className="space-y-4">
                    {(t.sapporo.news?.list || []).map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-[#c5a065] mt-1.5">•</span>
                        <span className="text-[#f5f5f0]/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-6 text-white/70 z-50">
              <div className="font-mono text-sm">
                {photoIndex + 1} / {allImages.length}
              </div>
              <button 
                className="hover:text-white p-2 transition-colors"
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              >
                <X size={32} />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 relative flex items-center justify-center p-4">
              {/* Nav Left */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-50 rounded-full hover:bg-white/10"
                onClick={prevPhoto}
              >
                <ChevronLeft size={48} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={photoIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    src={allImages[photoIndex]} 
                    alt={`Gallery Full ${photoIndex}`}
                    className="max-h-[70vh] max-w-[85vw] object-contain shadow-2xl pointer-events-auto"
                    onClick={(e) => e.stopPropagation()} 
                  />
                </AnimatePresence>
              </div>

              {/* Nav Right */}
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-50 rounded-full hover:bg-white/10"
                onClick={nextPhoto}
              >
                <ChevronRight size={48} />
              </button>
            </div>

            {/* Bottom Thumbnails Strip (Requested UI) */}
            <div className="bg-black/40 backdrop-blur-md p-4 mt-auto overflow-x-auto no-scrollbar border-t border-white/10">
              <div className="flex gap-2 min-w-max mx-auto px-4">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    ref={el => thumbnailRefs.current[idx] = el}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPhotoIndex(idx);
                    }}
                    className={cn(
                      "relative w-20 h-14 md:w-24 md:h-16 rounded-sm overflow-hidden transition-all flex-shrink-0 border-2",
                      photoIndex === idx 
                        ? "border-[#c5a065] scale-105 opacity-100 shadow-[0_0_15px_rgba(197,160,101,0.5)]" 
                        : "border-transparent opacity-40 hover:opacity-70"
                    )}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ title, desc, delay }: { title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="border-l-2 border-[#c5a065] pl-6 py-2"
    >
      <h3 className="font-serif text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-[#f5f5f0]/80 leading-relaxed text-lg whitespace-pre-line">
        {desc}
      </p>
    </motion.div>
  );
}
