import React from 'react';
import { Phone, ArrowRight, CheckCircle2, Shield, Sparkles, Layers, Info } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceCategory?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 bg-[#0a0c10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              <span>Service Catalogue</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>DHA Phase 7, Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Detailing & Automotive Coatings
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore our core vehicle-care solutions in DHA Phase 7, Lahore. Every treatment focuses on careful surface preparation, clear coat protection, and interior refinement.
            </p>
          </div>
        </div>
      </section>

      {/* Realistic Expectations Notice */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-white/10 bg-[#10141c] p-5 text-xs text-slate-300 flex items-start gap-3">
          <Info className="h-5 w-5 text-[#00e5ff] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Individual Assessment Notice:</strong> Vehicle clear coat conditions, previous paint damage, and road exposure vary significantly. Detailing treatments are tailored based on individual vehicle inspection. To discuss suitable options for your vehicle, contact us directly at{' '}
            <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-[#00e5ff] font-semibold hover:underline">
              {BUSINESS_INFO.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Services List (Deep Dives) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 sm:p-8 lg:p-12 transition-all hover:border-white/20"
              >
                <div
                  className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Details */}
                  <div className={`space-y-6 ${isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#00e5ff]">
                        0{index + 1}. DETAILED OFFERING
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Treatment Purpose
                        </span>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                          {service.purpose}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Scope & Process Details
                        </span>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Scope Points */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                        Included Care Elements:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.scopePoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="h-4 w-4 text-[#00e5ff] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={`tel:${BUSINESS_INFO.phoneTel}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-5 py-2.5 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call for Enquiries</span>
                      </a>
                      <button
                        onClick={() => onNavigate('contact', service.title)}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-[#161a24] px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white hover:border-[#00e5ff] transition-colors"
                      >
                        <span>Enquire About {service.title}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Slot */}
                  <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0d12] ${isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
                    <img
                      src={service.image}
                      alt={service.altText}
                      referrerPolicy="no-referrer"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="bg-[#0b0d12] p-3 text-[11px] text-slate-400 border-t border-white/5">
                      Visual presentation of {service.title.toLowerCase()} methodology.
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Guidance Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0d1017] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Ready to Discuss Your Vehicle’s Care?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Whether your car requires exterior decontamination, paint protection against harsh weather, or an interior deep clean, speak directly with Lahore Detailing Solutions.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call for Enquiries ({BUSINESS_INFO.phoneDisplay})</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-white hover:bg-white/5 transition-colors"
            >
              <span>Submit Vehicle Details</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
