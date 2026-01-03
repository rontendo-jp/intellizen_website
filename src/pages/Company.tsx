import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Company() {
  const { t } = useLanguage();

  const tableRows = [
    { label: t.company.table.name.label, value: t.company.table.name.value },
    { label: t.company.table.established.label, value: t.company.table.established.value },
    { label: t.company.table.rep.label, value: t.company.table.rep.value },
    { label: t.company.table.business.label, value: t.company.table.business.value },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-primary mb-12 text-center">{t.company.title}</h1>

        {/* Company Info Table */}
        <div className="bg-card shadow-sm border border-border rounded-sm overflow-hidden mb-16">
          <div className="divide-y divide-border">
            {tableRows.map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-secondary/20 p-4 md:p-6 font-bold text-primary text-sm flex items-center">
                  {row.label}
                </div>
                <div className="p-4 md:p-6 md:col-span-2 text-foreground text-sm">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">{t.company.vision.title}</h2>
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            {t.company.vision.text}
          </p>
        </div>
      </div>
    </div>
  );
}