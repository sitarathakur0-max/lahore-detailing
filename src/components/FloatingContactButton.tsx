import React, { useState } from 'react';
import { Phone, MapPin, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const FloatingContactButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating CTA fixed strictly to the BOTTOM-LEFT corner */}
      <aside
        aria-label="Floating direct contact"
        className="fixed bottom-5 left-5 z-40 max-w-[calc(100vw-2.5rem)] print:hidden"
      >
        <div className="flex items-center gap-2">
          {/* Main Action Pill/Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="group flex items-center gap-2.5 rounded-full bg-[#12161d] border border-[#00e5ff]/50 px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all hover:bg-[#00e5ff] hover:text-[#0b0d10] hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] focus-visible:ring-2 focus-visible:ring-[#00e5ff]"
            aria-label={`Call for Enquiries: ${BUSINESS_INFO.phoneDisplay}`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00e5ff]/15 group-hover:bg-[#0b0d10]/20 text-[#00e5ff] group-hover:text-[#0b0d10] transition-colors">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap tracking-wide">Call for Enquiries</span>
          </a>

          {/* Quick info trigger for location & business details */}
          <button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12161d] border border-white/20 text-slate-300 hover:text-white hover:border-white/40 shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#00e5ff]"
            aria-label="View quick contact details"
            aria-expanded={modalOpen}
          >
            {modalOpen ? <X className="h-4 w-4" /> : <MapPin className="h-4 w-4 text-[#00e5ff]" />}
          </button>
        </div>
      </aside>

      {/* Accessible Contact Card Popup */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-popup-title"
          className="fixed bottom-20 left-5 z-50 w-80 max-w-[calc(100vw-2.5rem)] rounded-xl border border-white/15 bg-[#12161d] p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <h2 id="contact-popup-title" className="text-sm font-semibold text-white">
                Contact Lahore Detailing Solutions
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Automotive Detailing & Surface Care</p>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="rounded-md p-1 text-slate-400 hover:text-white focus-visible:ring-1 focus-visible:ring-[#00e5ff]"
              aria-label="Close contact details popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-[#0b0d10] border border-white/5 p-3">
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block mb-1">
                Telephone Enquiry Line
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-between text-sm font-bold text-[#00e5ff] hover:underline"
              >
                <span>{BUSINESS_INFO.phoneDisplay}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-lg bg-[#0b0d10] border border-white/5 p-3">
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block mb-1">
                Listed Location
              </span>
              <p className="text-xs text-slate-200">{BUSINESS_INFO.location}</p>
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#00e5ff] hover:underline mt-2"
              >
                <span>Open in Maps</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00e5ff] py-2.5 text-xs font-semibold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Dial Directly Now</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
