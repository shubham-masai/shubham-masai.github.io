'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Home, User, Code2, FolderGit2, Mail } from 'lucide-react';
import { bio } from '@/data/portfolioData';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const handleResumeClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    // 1. Open resume in new tab
    window.open(bio.resume, '_blank', 'noopener,noreferrer');

    // 2. Automatically trigger resume download
    const link = document.createElement('a');
    link.href = bio.resume;
    link.setAttribute('download', 'Shubham-Jayswal-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs' 
          : 'pt-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
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

        {/* Desktop Nav Items in Masai Required Order: Home, About, Skills, Projects, Contact, Resume */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-white/90 border border-[#e2e8f0]' 
              : 'bg-white/80 backdrop-blur-sm border border-[#e2e8f0] shadow-xs'
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

          {/* 6. Resume: Opens in new tab & automatically downloads */}
          <a
            href={bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Shubham-Jayswal-Resume.pdf"
            onClick={handleResumeClick}
            className="ml-1.5 px-4 py-1.5 text-xs font-bold text-white bg-[#4f46e5] hover:bg-[#4338ca] rounded-full transition-all flex items-center gap-1.5 shadow-sm hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile View: Quick Resume Action & Hamburger Toggle */}
        <div className="flex items-center gap-2.5 md:hidden">
          <a
            href={bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Shubham-Jayswal-Resume.pdf"
            onClick={handleResumeClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[#4f46e5] shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#e2e8f0] text-[#0f172a] shadow-xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer in Exact Order: Home, About, Skills, Projects, Contact, Resume */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 max-w-7xl mx-4 sm:mx-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 overflow-hidden border border-[#e2e8f0] shadow-xl"
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

              {/* 6. Resume in Mobile Drawer */}
              <a
                href={bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Shubham-Jayswal-Resume.pdf"
                onClick={handleResumeClick}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#4f46e5] hover:bg-[#4338ca] transition-colors shadow-sm mt-1"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (Open & Download)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


