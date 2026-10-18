import React from 'react';
import { ShieldCheck, Phone, MapPin, ExternalLink, ArrowRight, Check } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 bg-[#0a0c10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              <span>About the Business</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>DHA Phase 7, Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Dedicated to Vehicle Appearance Care & Paint Protection
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Operating in DHA Phase 7, Lahore Detailing Solutions provides automotive detailing, paint protection, and coating treatments designed to protect vehicle bodywork and refresh vehicle interiors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Business Story & Focus */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Our Focus: Surface Preservation in Lahore
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Vehicles driven in Lahore encounter a demanding operating environment: airborne dust particles, high summer ambient temperatures, direct ultraviolet sunlight, and heavy seasonal precipitation. Standard roadside washing often relies on improper wash media and gritty water, creating circular scratch patterns commonly known as swirl marks.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Lahore Detailing Solutions approaches vehicle care with an emphasis on systematic decontamination, careful paint surface preparation, and the application of durable protective coatings. By addressing clear coat hygiene and sealing exterior surfaces, we help vehicle owners preserve paint clarity and reduce long-term environmental degradation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Surface Cleansing & Decontamination:</strong> Eliminating bonded road tar, industrial fallouts, and brake dust that routine washing fails to remove.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Clear Coat Protection:</strong> Layering protective barriers and hydrophobic coatings to repel standing water and shield clear coat.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Cabin Sanitization & Care:</strong> Refreshing cockpit fabrics, leather upholstery, and interior trim using suitable non-greasy dressings.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#12161f] overflow-hidden shadow-xl">
              <img
                src={IMAGES.workshop}
                alt="Automotive care workshop lighting and studio setting"
                referrerPolicy="no-referrer"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold text-white">Studio Environment & Visual Discipline</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Controlled lighting and meticulous inspection enable accurate surface assessment for every vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing Principles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-2xl space-y-2 mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The Principles Behind Automotive Detailing
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How professional vehicle detailing differs from standard maintenance washing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-[#10141c] p-6 space-y-3">
              <div className="text-xs font-mono font-semibold text-[#00e5ff]">01. Assessment</div>
              <h3 className="text-base font-bold text-white">Paint & Surface Evaluation</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Every vehicle’s clear coat has distinct thickness and wear history. Evaluating factory finish characteristics dictates the safe compound, pad, and cleaning chemistry required.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#10141c] p-6 space-y-3">
              <div className="text-xs font-mono font-semibold text-[#00e5ff]">02. Decontamination</div>
              <h3 className="text-base font-bold text-white">Two-Stage Preparation</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Chemical dissolves ferrous particulates and environmental sap, while mechanical clay media glides across lubrication to safely extract embedded contaminants.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#10141c] p-6 space-y-3">
              <div className="text-xs font-mono font-semibold text-[#00e5ff]">03. Preservation</div>
              <h3 className="text-base font-bold text-white">Protective Barrier Bonding</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Sealants and coatings crosslink over clean clear coat to form a resilient sacrificial barrier that defends against airborne fallout and simplifies subsequent maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Public Presence */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0e121a] p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs text-[#00e5ff]">
                <MapPin className="h-4 w-4" />
                <span className="font-semibold">DHA Phase 7, Lahore, Pakistan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Connect with Lahore Detailing Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We welcome inquiries regarding paint condition, coating application, and appointment scheduling. Speak directly with our team to discuss your car’s needs.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-5 py-2.5 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-xs font-medium text-white hover:bg-white/5 transition-colors"
                >
                  <span>Contact Form & Location</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Verified Public Presences
              </span>
              <a
                href={BUSINESS_INFO.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#12161f] p-4 text-slate-300 hover:border-[#00e5ff]/50 hover:text-white transition-all group"
              >
                <div>
                  <span className="text-xs font-bold text-white block">AutoYas Public Listing</span>
                  <span className="text-[11px] text-slate-400">Directory profile for Lahore Detailing Solutions</span>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-[#00e5ff]" />
              </a>

              <a
                href={BUSINESS_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#12161f] p-4 text-slate-300 hover:border-[#00e5ff]/50 hover:text-white transition-all group"
              >
                <div>
                  <span className="text-xs font-bold text-white block">LinkedIn Activity Profile</span>
                  <span className="text-[11px] text-slate-400">Public updates on vehicle ceramic coatings</span>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-[#00e5ff]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
