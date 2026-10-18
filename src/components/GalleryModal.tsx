import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-image-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#10141b] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 transition-colors focus-visible:ring-2 focus-visible:ring-[#00e5ff]"
          aria-label="Close image preview"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image Container with Fallback Container */}
        <div className="relative aspect-[16/10] w-full bg-[#0a0c10] overflow-hidden">
          <img
            src={item.image}
            alt={item.altText}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10141b] via-transparent to-transparent opacity-80" />
        </div>

        {/* Details Footer */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-[#00e5ff] font-medium mb-1.5">
            <ZoomIn className="h-3.5 w-3.5" />
            <span>{item.categoryLabel}</span>
          </div>
          <h3 id="modal-image-title" className="text-lg font-bold text-white tracking-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-300">
            {item.description}
          </p>
          <p className="mt-3 text-[11px] text-slate-500">
            Automotive detailing craftsmanship demonstration. Standard surface finishing illustration.
          </p>
        </div>
      </div>
    </div>
  );
};
