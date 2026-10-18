import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactButton } from './components/FloatingContactButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PaintGuidePage } from './pages/PaintGuidePage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Lahore Detailing Solutions | Auto Detailing & Paint Protection in DHA Phase 7, Lahore',
  about: 'About the Business | Lahore Detailing Solutions · DHA Phase 7, Lahore',
  services: 'Detailing Services & Coatings | Lahore Detailing Solutions · DHA Phase 7',
  'paint-guide': 'Paint Care & Protection Guide | Lahore Detailing Solutions',
  gallery: 'Automotive Work Gallery | Lahore Detailing Solutions · DHA Phase 7',
  faqs: 'Frequently Asked Questions | Lahore Detailing Solutions · DHA Phase 7',
  contact: 'Contact & Location | Lahore Detailing Solutions · DHA Phase 7, Lahore',
};

export default function App() {
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages: PageId[] = ['home', 'about', 'services', 'paint-guide', 'gallery', 'faqs', 'contact'];
    return validPages.includes(hash as PageId) ? (hash as PageId) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  // Sync hash with browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = ['home', 'about', 'services', 'paint-guide', 'gallery', 'faqs', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    window.location.hash = currentPage === 'home' ? '' : `#${currentPage}`;
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e2e8f0] flex flex-col font-sans selection:bg-[#00e5ff]/20 selection:text-white">
      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area with subtle fade-in transition on page change */}
      <main className="flex-1">
        <div key={currentPage} className="page-transition">
          {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
          {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
          {currentPage === 'paint-guide' && <PaintGuidePage onNavigate={navigateTo} />}
          {currentPage === 'gallery' && <GalleryPage onNavigate={navigateTo} />}
          {currentPage === 'faqs' && <FaqsPage onNavigate={navigateTo} />}
          {currentPage === 'contact' && <ContactPage />}
        </div>
      </main>

      {/* Mandatory Reusable Floating Contact Button fixed at BOTTOM-LEFT */}
      <FloatingContactButton />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
