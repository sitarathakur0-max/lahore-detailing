import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'paint-guide', label: 'Paint Guide' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0b0d10]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left text-lg font-bold tracking-tight text-white transition-colors hover:text-[#00e5ff] whitespace-nowrap shrink-0 focus-visible:ring-1 focus-visible:ring-[#00e5ff]"
          aria-label="Lahore Detailing Solutions Home"
        >
          {BUSINESS_INFO.name}
        </button>

        {/* Zone 2: Navigation Links (Single-Line, subtle hover) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-sm tracking-wide ${
                  isActive
                    ? 'border-[#00e5ff] text-white font-semibold'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-[#161a22] border border-white/15 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#00e5ff] hover:text-[#0b0d10] hover:border-[#00e5ff] whitespace-nowrap shrink-0"
            aria-label={`Call for Enquiries: ${BUSINESS_INFO.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Call for Enquiries</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-[#161a22] p-2 text-slate-200 hover:text-white"
            aria-label="Call for Enquiries"
          >
            <Phone className="h-4 w-4 text-[#00e5ff]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-[#161a22] p-2 text-slate-300 hover:bg-[#1f242d] hover:text-white"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0f1217] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium ${
                currentPage === 'home' ? 'bg-[#161a22] text-[#00e5ff]' : 'text-slate-300 hover:bg-[#161a22] hover:text-white'
              }`}
            >
              <span>Home</span>
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium ${
                  currentPage === link.id ? 'bg-[#161a22] text-[#00e5ff]' : 'text-slate-300 hover:bg-[#161a22] hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
              </button>
            ))}
            <div className="pt-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#00e5ff] px-4 py-3 text-sm font-semibold text-[#0b0d10] hover:bg-[#38bdf8] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call for Enquiries ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
