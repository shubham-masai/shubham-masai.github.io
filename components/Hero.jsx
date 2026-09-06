'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Code, Cpu, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { bio } from '@/data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % bio.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      itemScope 
      itemType="https://schema.org/Person" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#f1f5f9]"
    >
      <meta itemProp="name" content="Shubham Jayswal" />
      <meta itemProp="jobTitle" content="Full Stack Software Developer" />
      <meta itemProp="url" content="https://shubham-masai.github.io/" />
      
      {/* Background Animated Ambient Light Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#6366f1]/15 via-[#8b5cf6]/10 to-[#ec4899]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-bold text-[#4f46e5] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#6366f1]" />
              <span>Available for Full-Time & Freelance Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 pt-1">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.18]">
                Hi, I'm <span className="bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">{bio.name}</span>
              </h1>

              <div className="mt-4 sm:mt-5 min-h-[44px] flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1.5">
                <span className="text-base sm:text-xl font-mono text-[#64748b]">Specializing in</span>
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-base sm:text-xl font-mono font-extrabold text-[#4f46e5] border-b-2 border-[#6366f1] pb-0.5"
                >
                  {bio.roles[currentRoleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
              {bio.description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm btn-primary-indigo"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm btn-secondary-indigo shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#4f46e5]" />
                <span>Download Resume</span>
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-2.5 pl-2">
                <a
                  href={bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[#64748b] hover:text-[#4f46e5] hover:border-[#6366f1] shadow-xs transition-all duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[#64748b] hover:text-[#4f46e5] hover:border-[#6366f1] shadow-xs transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Profile Avatar with Multi-layer Background Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative flex items-center justify-center">
              
              {/* Layer 1: Morphing Fluid Gradient Blob Behind Photo */}
              <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#6366f1]/30 via-[#8b5cf6]/25 to-[#06b6d4]/30 animate-morph-blob blur-xl" />

              {/* Layer 2: Outer Rotating Dashed Ring */}
              <div className="absolute w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-dashed border-[#6366f1]/40 animate-spin-slow pointer-events-none" />

              {/* Layer 3: Inner Counter-Rotating Gradient Ring */}
              <div className="absolute w-[285px] h-[285px] sm:w-[350px] sm:h-[350px] rounded-full p-[2px] bg-gradient-to-r from-[#4f46e5] via-[#ec4899] to-[#06b6d4] animate-reverse-spin-slow opacity-80 pointer-events-none" />

              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-white/90 backdrop-blur-md border-2 border-[#cbd5e1] shadow-2xl z-10 group">
                <div 
                  itemScope 
                  itemProp="image" 
                  itemType="https://schema.org/ImageObject"
                  className="relative w-full h-full rounded-full overflow-hidden bg-slate-100"
                >
                  <meta itemProp="name" content="Shubham Jayswal" />
                  <meta itemProp="caption" content="Shubham Jayswal - Full Stack Software Developer" />
                  <meta itemProp="representativeOfPage" content="true" />
                  <Image
                    src={bio.avatar}
                    alt="Shubham Jayswal - Full Stack Software Developer"
                    title="Shubham Jayswal | Full Stack Software Developer"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                    itemProp="contentUrl"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: React.js */}
              <div className="absolute -top-2 -left-4 sm:top-2 sm:-left-6 z-20 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e2e8f0] shadow-lg flex items-center gap-2 animate-float-slow">
                <Code className="w-4 h-4 text-[#6366f1]" />
                <span className="text-xs font-bold text-[#0f172a]">React.js</span>
              </div>

              {/* Floating Badge 2: Node.js */}
              <div className="absolute -bottom-2 -right-4 sm:bottom-4 sm:-right-6 z-20 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e2e8f0] shadow-lg flex items-center gap-2 animate-float-slow [animation-delay:1.5s]">
                <Cpu className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs font-bold text-[#0f172a]">Node.js</span>
              </div>

              {/* Floating Badge 3: MongoDB */}
              <div className="absolute top-1/2 -right-8 z-20 hidden sm:flex px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#e2e8f0] shadow-lg items-center gap-2 animate-float-slow [animation-delay:0.8s]">
                <Database className="w-4 h-4 text-[#8b5cf6]" />
                <span className="text-xs font-bold text-[#0f172a]">MongoDB</span>
              </div>

            </div>

            {/* Current Status Pill */}
            <div className="mt-8 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-md flex items-center gap-2.5 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-bold text-[#0f172a]">Full Stack Developer</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

