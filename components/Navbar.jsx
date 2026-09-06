'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, User, Code2, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { bio } from '@/data/portfolioData';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4f46e5] to-[#8b5cf6] text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#0f172a] tracking-wide group-hover:text-[#4f46e5] transition-colors">
              {bio.name}
            </span>
            <span className="text-[11px] text-[#6366f1] font-mono">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md border border-[#e2e8f0] shadow-md' : 'bg-white/70 backdrop-blur-sm border border-[#e2e8f0]'
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#64748b] hover:text-[#4f46e5] hover:bg-[#f1f5f9] rounded-full transition-colors flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-[#6366f1]" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold btn-primary-indigo shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-[#e2e8f0] text-[#0f172a] shadow-xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 overflow-hidden border border-[#e2e8f0] shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#6366f1]" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

