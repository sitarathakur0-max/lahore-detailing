import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#07090c] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand & Core Position */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Auto detailing, paint protection, and automotive coating services dedicated to vehicle surface care and preservation in DHA Phase 7, Lahore.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#00e5ff]" />
              <span>DHA Phase 7, Lahore, Pakistan</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  About the Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Detailing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('paint-guide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Paint Care & Protection Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Work Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('faqs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Contact & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5">Telephone</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#00e5ff] hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Service Region</span>
                <span className="text-slate-300 block">{BUSINESS_INFO.location}</span>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-[#00e5ff] transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#00e5ff]" />
                  <span>Find DHA Phase 7 on Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Public Business Presences */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Public Business Profiles
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={BUSINESS_INFO.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-white/10 bg-[#10141a] p-3 text-slate-300 hover:border-[#00e5ff]/40 hover:text-white transition-all group"
              >
                <div>
                  <span className="font-medium block text-white text-xs">AutoYas Directory</span>
                  <span className="text-[11px] text-slate-400">Public Business Profile</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#00e5ff]" />
              </a>

              <a
                href={BUSINESS_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-white/10 bg-[#10141a] p-3 text-slate-300 hover:border-[#00e5ff]/40 hover:text-white transition-all group"
              >
                <div>
                  <span className="font-medium block text-white text-xs">LinkedIn Presence</span>
                  <span className="text-[11px] text-slate-400">Public Company Activity</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#00e5ff]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom hairline & copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Lahore Detailing Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>DHA Phase 7, Lahore</span>
            <span aria-hidden="true">·</span>
            <span>Auto Detailing & Coatings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
