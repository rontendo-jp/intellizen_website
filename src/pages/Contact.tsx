import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  useEffect(() => {
    // Tally embed script
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const onLoad = () => {
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      }
    };

    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
        onLoad();
    } else {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.onload = onLoad;
        script.onerror = onLoad;
        document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-secondary/20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">{t.contact.title}</h1>
          <p className="text-muted-foreground">
            {t.contact.desc}
          </p>
        </div>

        <div className="bg-card shadow-lg p-1 md:p-2 rounded-sm border-t-4 border-accent">
            <iframe 
                data-tally-src="https://tally.so/embed/eqQ6xJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="204" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Contact Form"
            ></iframe>
        </div>
      </div>
    </div>
  );
}
