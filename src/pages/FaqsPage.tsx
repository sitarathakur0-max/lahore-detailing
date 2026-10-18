import React, { useState } from 'react';
import { ChevronDown, Phone, MapPin, ArrowRight, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQS } from '../data/businessData';

interface FaqsPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate }) => {
  // First item open by default for immediate accessibility
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 bg-[#0a0c10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              <span>Customer Assistance</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>DHA Phase 7, Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Find clear answers regarding contacting the studio, our DHA Phase 7 location, service inquiries, and vehicle preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-white/10 bg-[#10141c] overflow-hidden transition-all hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00e5ff]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-[11px] font-mono text-[#00e5ff] uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h2>
                  </div>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#161b24] text-slate-300 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00e5ff]' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="border-t border-white/5 bg-[#0b0e14] p-5 sm:p-6 text-xs sm:text-sm leading-relaxed text-slate-300 animate-in fade-in-50 duration-150"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0e121a] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Have a Specific Question About Your Vehicle?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our team is available by phone to discuss custom detailing requirements, vehicle inspection, and available slots in DHA Phase 7, Lahore.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-white hover:bg-white/5 transition-colors"
            >
              <span>Send Online Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
