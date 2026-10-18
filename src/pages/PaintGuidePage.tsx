import React from 'react';
import { ShieldAlert, Droplets, Sun, Sparkles, HelpCircle, Phone, ArrowRight, Check } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';

interface PaintGuidePageProps {
  onNavigate: (page: PageId) => void;
}

export const PaintGuidePage: React.FC<PaintGuidePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 bg-[#0a0c10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              <span>Vehicle Owner Education</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>DHA Phase 7, Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Paint Care & Protection Guide
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Practical guidance for maintaining clear coat clarity, preserving automotive coatings, and preventing common wash-induced surface defects in Lahore’s environment.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Expectations Box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-6 text-slate-200">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs">
              <h2 className="text-sm font-semibold text-white">Realistic Expectations for Paint Coatings</h2>
              <p className="leading-relaxed text-slate-300">
                Automotive protective coatings are sacrificial, hydrophobic barrier layers—<strong>no coating makes paint completely scratch-proof, impervious to rock chips, or self-cleaning</strong>. Regular, safe washing remains essential. Results depend directly on underlying factory clear coat condition, application technique, and ongoing owner care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Chapters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Chapter 1: Safe Washing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-16">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold text-[#00e5ff]">
                01. EXTERIOR WASHING PRINCIPLES
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Preventing Swirl Marks During Routine Washes
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Over 90% of spider-web scratches and swirl marks on car paint are inflicted during improper wash and dry procedures. When road dust is rubbed directly against dry or poorly lubricated paint, sharp grit particles gouge the clear coat.
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p>
                    <strong className="text-white">Pre-Rinse & Touchless Soak:</strong> Always hose down loose dust and road grime thoroughly before contacting paint with a wash pad.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p>
                    <strong className="text-white">The Two-Bucket Method:</strong> Use one bucket for soapy wash solution and a separate bucket with clean water to rinse your wash mitt between panels.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e5ff]/15 text-[#00e5ff]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p>
                    <strong className="text-white">pH-Neutral Auto Shampoo:</strong> Avoid household dish soaps or harsh caustic detergents that strip protective sealants and dry out clear coats.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-[#12161f] overflow-hidden">
                <img
                  src={IMAGES.paintCorrection}
                  alt="Clear coat inspection showing swirl-free surface reflection"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Chapter 2: Understanding Coatings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-16">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl border border-white/10 bg-[#12161f] overflow-hidden">
                <img
                  src={IMAGES.coating}
                  alt="Hydrophobic water droplets beading on automotive coating"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono font-semibold text-[#00e5ff]">
                02. COATING SCIENCE & REALITY
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                What Protective Coatings Do and Do Not Do
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Automotive coatings bond tightly with the factory clear coat, providing chemical resistance and establishing high surface tension. Understanding their functional scope ensures realistic ownership expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="rounded-xl border border-white/10 bg-[#10141c] p-4 space-y-2">
                  <span className="font-bold text-[#00e5ff] flex items-center gap-1.5">
                    <Droplets className="h-4 w-4" />
                    <span>Real Benefits</span>
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    <li>• Dense water and road grime repellency</li>
                    <li>• Resistance to UV oxidation and fading</li>
                    <li>• Easier maintenance washes</li>
                    <li>• Enhanced optical gloss and clarity</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#10141c] p-4 space-y-2">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <ShieldAlert className="h-4 w-4 text-amber-400" />
                    <span>Common Misconceptions</span>
                  </span>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>• Does NOT prevent high-speed stone chips</li>
                    <li>• Does NOT eliminate the need to wash</li>
                    <li>• Does NOT resist severe keying or abrasions</li>
                    <li>• Requires regular pH-neutral maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3: Lahore Environmental Realities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-16">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold text-[#00e5ff]">
                03. LOCAL CLIMATE ADAPTATION
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Managing Lahore’s Environmental Impact on Paint
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Lahore’s urban atmosphere poses unique challenges for vehicle finishes. Extreme sun heats panels above 60°C in peak summer, causing organic bird droppings and tree sap to bake into the clear coat within hours.
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="rounded-lg border border-white/5 bg-[#10141c] p-3.5">
                  <span className="font-semibold text-white block mb-1">Prompt Etching Removal</span>
                  <span className="text-slate-400">
                    If bird lime or acidic tree sap lands on your vehicle, soak it with a damp microfiber cloth immediately to soften it before gently lifting it off. Never dry-rub baked deposits.
                  </span>
                </div>
                <div className="rounded-lg border border-white/5 bg-[#10141c] p-3.5">
                  <span className="font-semibold text-white block mb-1">Avoid Washing in Direct Noon Sunlight</span>
                  <span className="text-slate-400">
                    High mineral content in local tap water causes mineral scale (water spots) if droplets dry prematurely on hot metal panels. Wash during early mornings or inside shaded bays.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-[#12161f] p-6 space-y-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Interior Upkeep Checklist
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ultraviolet radiation degrades leather seats and dries out dashboard plastics. Consider these habits:
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-[#00e5ff] shrink-0" />
                    <span>Use a fitted windshield reflective sunshade when parked outdoors.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#00e5ff] shrink-0" />
                    <span>Vacuum floor mats regularly to prevent fine dust from abrading carpet fibers.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-[#00e5ff] shrink-0" />
                    <span>Avoid sticky silicone gloss dressings that attract airborne dust.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chapter 4: Questions to Ask */}
          <div className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-semibold text-[#00e5ff]">
                04. INFORMED DECISION MAKING
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Questions to Ask Before Choosing a Detailing Treatment
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Helpful questions vehicle owners should consider when consulting an auto detailer:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-[#10141c] p-5 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#00e5ff]" />
                  <span>How is the paint assessed prior to treatment?</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Ensure the vehicle is physically inspected for clear coat depth and current defect severity before a specific treatment compound is recommended.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#10141c] p-5 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#00e5ff]" />
                  <span>What preparation steps precede coating application?</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  A coating cannot properly adhere over oils, waxes, or embedded contaminants; multi-stage chemical decontamination and surface prep are critical prerequisites.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#10141c] p-5 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#00e5ff]" />
                  <span>What maintenance routine is recommended afterwards?</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Ask what shampoos and washing intervals will preserve the hydrophobic properties of your protective coating.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#10141c] p-5 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#00e5ff]" />
                  <span>What are the realistic limitations of the treatment?</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  A reliable technician will clearly articulate what the treatment can achieve and what it cannot, avoiding unrealistic claims of perpetual perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Callout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0e121a] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Have Questions About Your Car’s Paint?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Call Lahore Detailing Solutions at +92 322 4811924 to discuss paint care options suited to your vehicle’s condition and driving routine.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3 text-xs font-bold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call for Enquiries</span>
            </a>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-white hover:bg-white/5 transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
