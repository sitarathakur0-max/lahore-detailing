import React, { useState } from 'react';
import { ZoomIn, Phone, ArrowRight } from 'lucide-react';
import { PageId, GalleryItem } from '../types';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/businessData';
import { GalleryModal } from '../components/GalleryModal';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 bg-[#0a0c10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">
              <span>Surface Craftsmanship</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>DHA Phase 7, Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Automotive Finish & Detailing Gallery
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Visual representation of automotive detailing standards, clear coat reflection, paint protection water-beading, and interior cabin cleanliness.
            </p>
            <p className="text-xs text-slate-400">
              Visual demonstration illustrating detailing processes and surface finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Interactive Filter Tabs (Functional segmented controls) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-[#00e5ff] text-[#0b0d10] font-bold shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-[#12161f] text-slate-300 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            All Finishes ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveFilter('reflection')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeFilter === 'reflection'
                ? 'bg-[#00e5ff] text-[#0b0d10] font-bold shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-[#12161f] text-slate-300 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            Surface Reflection
          </button>
          <button
            onClick={() => setActiveFilter('exterior')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeFilter === 'exterior'
                ? 'bg-[#00e5ff] text-[#0b0d10] font-bold shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-[#12161f] text-slate-300 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            Paint Preparation
          </button>
          <button
            onClick={() => setActiveFilter('coating')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeFilter === 'coating'
                ? 'bg-[#00e5ff] text-[#0b0d10] font-bold shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-[#12161f] text-slate-300 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            Automotive Coating
          </button>
          <button
            onClick={() => setActiveFilter('interior')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeFilter === 'interior'
                ? 'bg-[#00e5ff] text-[#0b0d10] font-bold shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-[#12161f] text-slate-300 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            Interior Cabin
          </button>
        </div>

        {/* Gallery Grid with subtle fade transition on filter change */}
        <div key={activeFilter} className="content-fade-in grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#10141c] overflow-hidden transition-all hover:border-[#00e5ff]/50 hover:bg-[#131924]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`View enlarged image of ${item.title}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0d12]">
                <img
                  src={item.image}
                  alt={item.altText}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141c] via-transparent to-transparent opacity-60" />
                
                {/* Hover overlay affordance */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#00e5ff] px-3.5 py-1.5 text-xs font-bold text-[#0b0d10] shadow-lg">
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#00e5ff] font-medium">
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400">Standard Finish</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0d1017] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Discuss Your Vehicle’s Finish
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every vehicle has unique paint characteristics. Call Lahore Detailing Solutions at +92 322 4811924 to discuss appropriate detailing and coating options.
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
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-white hover:bg-white/5 transition-colors"
            >
              <span>Contact Page</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
