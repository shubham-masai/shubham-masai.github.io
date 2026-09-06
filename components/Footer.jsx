'use client';

import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { bio } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#e2e8f0] bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4f46e5] to-[#8b5cf6] text-white font-black text-xs shadow-md">
              SJ
            </div>
            <div>
              <p className="text-sm font-bold text-[#0f172a]">{bio.name}</p>
              <p className="text-xs text-[#64748b] font-mono">Full Stack Web Developer • 2 Years Exp</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white text-[#64748b] hover:text-[#4f46e5] border border-[#e2e8f0] shadow-xs transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white text-[#64748b] hover:text-[#4f46e5] border border-[#e2e8f0] shadow-xs transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${bio.email}`}
              className="p-2.5 rounded-xl bg-white text-[#64748b] hover:text-[#4f46e5] border border-[#e2e8f0] shadow-xs transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl btn-primary-indigo shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b] font-mono">
          <p>© {new Date().getFullYear()} {bio.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


