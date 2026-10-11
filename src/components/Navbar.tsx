import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { navLinks } from '../data/siteData';
import { useNavbarScroll } from '../hooks/useAnimations';
import BrandWordmark from './BrandWordmark';

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Keep the active nav item synchronized with the URL and the section in view.
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash || '#home';
      setActiveLink(hash);
      const target = document.querySelector<HTMLElement>(hash);
      if (target) {
        // Wait for layout to settle before scrolling, especially on direct links/reload.
        window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }));
      }
    };

    const timer = window.setTimeout(syncHash, 80);
    window.addEventListener('hashchange', syncHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1)).filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveLink(`#${visible.target.id}`);
    }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'bg-white/95 py-3 shadow-sm' : 'bg-white/90 py-4'
        }`}
      >
        <div className="container mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10 2xl:px-12">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-start gap-1 group" aria-label="ORYN Technology home">
            <BrandWordmark />
            <span className="pl-[2px] text-[10px] tracking-[0.32em] uppercase text-text-secondary">
              Technology
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  setActiveLink(link.href);
                  const target = document.querySelector<HTMLElement>(link.href);
                  if (target) {
                    event.preventDefault();
                    window.history.pushState(null, '', link.href);
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeLink === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-text-primary rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop primary action */}
          <div className="hidden xl:flex items-center">
            <a
              href="#contact"
              className="bg-navy bg-gradient-to-r from-blue-600 to-navy text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
            >
              Let's Build Together
              <Icon name="arrow-right" size={16} className="ml-2" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-text-primary p-2 focus:outline-none focus:ring-2 focus:ring-text-primary rounded-md"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="oryn-mobile-menu"
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          id="oryn-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm navbar-glass shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex flex-col items-start gap-1">
              <BrandWordmark compact />
              <span className="pl-[2px] text-[9px] tracking-[0.3em] uppercase text-text-secondary">
                Technology
              </span>
            </div>
            <button
              className="text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary rounded-md p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <Icon name="x" size={24} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="p-6 flex flex-col space-y-2 h-[calc(100%-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                  const target = document.querySelector<HTMLElement>(link.href);
                  if (target) {
                    event.preventDefault();
                    window.history.pushState(null, '', link.href);
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`flex items-center justify-between py-4 text-base font-medium border-b border-white/5 transition-colors ${
                  activeLink === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                <Icon name="chevronRight" size={16} className={activeLink === link.href ? 'text-text-primary' : 'text-text-secondary opacity-50'} />
              </a>
            ))}
            
            <div className="mt-8 pt-8">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-navy bg-gradient-to-r from-blue-600 to-navy text-white px-5 py-3 rounded-lg text-sm font-medium hover:opacity-90 hover:shadow-lg transition-all flex items-center justify-center"
              >
                Let's Build Together
                <Icon name="arrow-right" size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
