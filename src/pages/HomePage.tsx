import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, MapPin, Eye, Layers } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES, SERVICES } from '../data/businessData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090b0e] pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Subtle cyan ambient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00e5ff]/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
                <span>Auto Detailing</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>DHA Phase 7, Lahore</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Every Detail Matters.
              </h1>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
                Explore automotive detailing and vehicle-care options with Lahore Detailing Solutions in DHA Phase 7, Lahore.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#00e5ff] px-6 py-3.5 text-sm font-bold text-[#0b0d10] transition-all hover:bg-[#38bdf8] shadow-[0_0_25px_rgba(0,229,255,0.25)] whitespace-nowrap shrink-0"
                  aria-label={`Call for Enquiries: ${BUSINESS_INFO.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call for Enquiries</span>
                </a>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#12161f] px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-[#00e5ff]/50 hover:text-white whitespace-nowrap shrink-0"
                >
                  <span>Explore Detailing Services</span>
                  <ArrowRight className="h-4 w-4 text-[#00e5ff]" />
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#00e5ff]" />
                  <span>Paint Protection & Coatings</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#00e5ff]" />
                  <span>DHA Phase 7, Lahore Location</span>
                </div>
              </div>
            </div>

            {/* Right Column: Wide Automotive Photography */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#12161f] shadow-2xl">
                <img
                  src={IMAGES.hero}
                  alt="High-end dark vehicle clear coat undergoing detailing inspection under strip studio illumination"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#0d1017]/85 p-3 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-semibold text-white">Precision Surface Care</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Specialized exterior decontamination and finish protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO THE BUSINESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              Dedicated Vehicle Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Automotive Appearance Care in DHA Phase 7
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Lahore Detailing Solutions specializes in car wash and auto detailing services tailored to the driving and atmospheric conditions of Lahore. Operating within DHA Phase 7, our vehicle treatments focus on meticulous decontamination, clear coat protection, and interior preservation.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Rather than generic speed-washes that can induce micro-marring, we emphasize controlled cleansing methods and protective treatments designed to maintain vehicle finish over the long term.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#00e5ff] hover:underline"
              >
                <span>Read About the Business</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12161f]">
              <img
                src={IMAGES.paintCorrection}
                alt="Automotive paint preparation and polisher detailing application"
                referrerPolicy="no-referrer"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL OVERVIEW OF CONFIRMED SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              Confirmed Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Detailing & Coating Services
            </h2>
            <p className="max-w-xl text-xs sm:text-sm text-slate-400">
              Explore our core vehicle-care solutions based in DHA Phase 7, Lahore.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#12161f] px-4 py-2.5 text-xs font-medium text-slate-200 hover:border-[#00e5ff] hover:text-white transition-all whitespace-nowrap self-start md:self-auto"
          >
            <span>View Full Service Catalogue</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#00e5ff]" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#10141c] p-5 transition-all hover:border-[#00e5ff]/40 hover:bg-[#141923]"
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#0b0d10]">
                  <img
                    src={service.image}
                    alt={service.altText}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-xs text-[#00e5ff] font-semibold">
                  0{index + 1}. Service
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="h-3 w-3 text-[#00e5ff]" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="text-xs font-semibold text-[#00e5ff] hover:underline"
                >
                  Call to Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE PURPOSE & VALUE OF VEHICLE DETAILING */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#10141c] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
                Paint Preservation Discipline
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Understanding the Purpose of Auto Detailing
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Unlike a rapid roadside wash that frequently relies on recycled gritty water and abrasive wash mitts, professional automotive detailing is a systematic process of vehicle hygiene, paint preservation, and surface sealing.
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">Clear Coat Protection:</strong> Factory automotive clear coat is thin—often thinner than a post-it note. Proper detailing removes bonded contaminants before they cause clear coat oxidation.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">Enhanced Water & Dirt Shedding:</strong> Applying quality sealants and hydrophobic coatings increases surface contact angle, allowing rain and rinse water to roll away cleanly.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                    <Layers className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">Interior Environmental Health:</strong> Cockpit surfaces harbor atmospheric dust and organic debris; deep vacuuming and conditioned surfaces maintain a clean driving environment.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0d12]">
                <img
                  src={IMAGES.coating}
                  alt="Coating surface beading and hydrophobic paint protection"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PAINT CARE & VEHICLE MAINTENANCE SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#12161f]">
              <img
                src={IMAGES.interior}
                alt="Luxury vehicle cockpit interior detailing"
                referrerPolicy="no-referrer"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              Owner Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Paint Care & Vehicle Maintenance Guide
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Maintaining vehicle appearance in Lahore requires understanding how atmospheric dust, summer heat, and monsoon moisture interact with vehicle bodywork. We provide practical advice to help owners protect their paint between detailing sessions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400 pt-2">
              <div className="rounded-lg border border-white/5 bg-[#10141c] p-4">
                <span className="font-semibold text-white block mb-1">Two-Bucket Washing</span>
                <span>Separate wash and rinse buckets to prevent dragging particulate dirt across clear coat.</span>
              </div>
              <div className="rounded-lg border border-white/5 bg-[#10141c] p-4">
                <span className="font-semibold text-white block mb-1">Plush Microfiber Media</span>
                <span>Use dedicated clean microfiber drying towels rather than abrasive rough cloths.</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('paint-guide')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-[#12161f] px-5 py-3 text-xs font-semibold text-white hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all"
              >
                <span>Learn About Paint Care</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CRAFTSMANSHIP & SURFACE DISCIPLINE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1219] p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              Studio Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Controlled Environment & Inspection Discipline
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Surface inspection under dedicated overhead lighting reveals clear coat clarity, swirl patterns, and finish uniformity. Our approach prioritizes careful measurement, panel-by-panel assessment, and realistic preservation over quick surface glazes that wash away.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#00e5ff] hover:underline"
              >
                <Eye className="h-4 w-4" />
                <span>View Automotive Gallery</span>
              </button>
              <span className="text-slate-600">·</span>
              <button
                onClick={() => onNavigate('faqs')}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                <span>Read Frequently Asked Questions</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & SERVICE AREA (DHA PHASE 7, LAHORE) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              Service Area
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Serving DHA Phase 7 & Surrounding Lahore
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Lahore Detailing Solutions is located in DHA Phase 7, Lahore, Pakistan. We serve vehicle owners seeking attentive auto detailing, paint protection, and coating treatments.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-200">
                <strong>Area:</strong> DHA Phase 7, Lahore, Punjab, Pakistan
              </p>
              <p>
                <strong>Telephone Inquiries:</strong> {BUSINESS_INFO.phoneDisplay}
              </p>
            </div>
            <div className="pt-3 flex flex-wrap gap-4">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#161b24] border border-white/15 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white hover:border-[#00e5ff] transition-all"
              >
                <MapPin className="h-3.5 w-3.5 text-[#00e5ff]" />
                <span>Find the Location on Google Maps</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-white/5 transition-all"
              >
                <span>Contact Page & Inquiries</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#12161f] p-6 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To confirm current bay availability or ask questions about detailing options for your car, speak directly with our team:
              </p>
              <div className="rounded-xl bg-[#0a0d12] border border-white/5 p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Primary Telephone Line
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="text-base font-bold text-[#00e5ff] hover:underline block"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00e5ff] py-3 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call for Enquiries</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
