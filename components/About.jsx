'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, MapPin, Award, BookOpen, Briefcase, X, Eye } from 'lucide-react';
import { bio } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#ffffff] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-bold shadow-xs">
            <User className="w-3.5 h-3.5" />
            <span>Developer Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            About <span className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">{bio.name}</span>
          </h2>
        </div>

        {/* Narrative & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 card-light p-6 sm:p-8 rounded-2xl space-y-6 border border-[#e2e8f0]"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0f172a]">Full Stack Software Developer</h3>
                <p className="text-xs text-[#4f46e5] font-mono font-semibold">Software Developer • MERN & Next.js Specialist</p>
              </div>
            </div>

            <p className="text-[#475569] text-base leading-relaxed">
              {bio.about}
            </p>

            <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs text-[#64748b] font-mono">Current Location:</span>
                <p className="text-sm font-bold text-[#0f172a] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#4f46e5]" />
                  {bio.location}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#64748b] font-mono">Industry Experience:</span>
                <p className="text-sm font-bold text-[#0f172a] flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#4f46e5]" />
                  2 Years Professional Experience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 card-light p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 border border-[#e2e8f0] relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5]">
                  <Award className="w-6 h-6" />
                </div>
                <button 
                  onClick={() => setCertModalOpen(true)}
                  className="text-xs font-semibold text-[#4f46e5] flex items-center gap-1 bg-[#e0e7ff] hover:bg-[#c7d2fe] px-2.5 py-1.5 rounded-full cursor-pointer transition-all shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>

              <h3 className="text-lg font-bold text-[#0f172a]">
                Full Stack Program
              </h3>
              <p className="text-xs text-[#4f46e5] font-mono font-semibold">Masai School, Bengaluru</p>

              <p className="text-xs text-[#64748b] leading-relaxed">
                Completed 1200+ hours intensive engineering training in MERN Stack, Data Structures & Algorithms. Graduated with distinction.
              </p>
            </div>

            <button 
              onClick={() => setCertModalOpen(true)}
              className="pt-3 border-t border-[#e2e8f0] text-xs text-[#10b981] hover:text-[#059669] font-bold font-mono cursor-pointer transition-colors flex items-center justify-between w-full text-left"
            >
              <span>Certification Verified (Dec 2023)</span>
              <Eye className="w-3.5 h-3.5 text-[#10b981]" />
            </button>
          </motion.div>

        </div>

      </div>

      {/* Masai School Certificate Image Modal */}
      <AnimatePresence>
        {certModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#e2e8f0] p-4 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Masai School Certification</h3>
                  <p className="text-xs text-[#64748b] font-mono">Full Stack Web Development Program • Verified Distinction</p>
                </div>
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="p-2 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] text-[#0f172a] hover:bg-[#e2e8f0] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-50 rounded-2xl overflow-hidden border border-[#e2e8f0]">
                <Image
                  src="/masai.webp"
                  alt="Masai School Certification"
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain p-2"
                />
              </div>

              <div className="flex justify-end pt-2">
                <a
                  href="/masai.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary-indigo inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Open Full Image in New Tab ↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



