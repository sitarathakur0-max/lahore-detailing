import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 bg-[#0a0c10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              <span>Get in Touch</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>DHA Phase 7, Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Contact & Studio Location
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Reach out directly to discuss auto detailing treatments, vehicle inspection, or paint protection for your vehicle in DHA Phase 7, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details on Left, Form on Right */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Business & Location Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#10141c] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00e5ff] block mb-1">
                  Automotive Studio
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {BUSINESS_INFO.category}
                </p>
              </div>

              {/* Telephone */}
              <div className="rounded-xl border border-white/5 bg-[#0b0e14] p-4 space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Telephone Contact
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="flex items-center gap-2 text-lg font-bold text-[#00e5ff] hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <p className="text-[11px] text-slate-400 pt-0.5">
                  Click to dial directly from your mobile device.
                </p>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-white/5 bg-[#0b0e14] p-4 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Listed Area Location
                </span>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <MapPin className="h-4 w-4 text-[#00e5ff] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{BUSINESS_INFO.location}</strong>
                    <span className="text-slate-400 text-[11px]">Serving DHA Phase 7 and surrounding sectors across Lahore.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#161b24] border border-white/15 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white hover:border-[#00e5ff] transition-all"
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#00e5ff]" />
                    <span>Open DHA Phase 7 in Google Maps</span>
                    <ExternalLink className="h-3 w-3 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Public Profiles */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Verified Online Profiles
                </span>
                <a
                  href={BUSINESS_INFO.listingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0b0e14] p-3 text-xs text-slate-300 hover:border-[#00e5ff]/40 hover:text-white transition-all group"
                >
                  <div>
                    <span className="font-semibold text-white block">AutoYas Public Directory</span>
                    <span className="text-[11px] text-slate-400">Lahore Detailing Solutions listing</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#00e5ff]" />
                </a>

                <a
                  href={BUSINESS_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0b0e14] p-3 text-xs text-slate-300 hover:border-[#00e5ff]/40 hover:text-white transition-all group"
                >
                  <div>
                    <span className="font-semibold text-white block">LinkedIn Company Presence</span>
                    <span className="text-[11px] text-slate-400">Ceramic coating & detailing post</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#00e5ff]" />
                </a>
              </div>
            </div>

            {/* Quick Guidance Box */}
            <div className="rounded-xl border border-white/10 bg-[#0e121a] p-5 text-xs text-slate-300 space-y-2">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#00e5ff]" />
                <span>Scheduling Guidance</span>
              </span>
              <p className="leading-relaxed text-slate-400">
                Vehicle inspection allows accurate assessment of paint clear coat depth and defect levels. We recommend phoning ahead to confirm available technician time and bay capacity.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
