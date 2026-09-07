'use client';

import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { experience, education } from '@/data/portfolioData';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-bold shadow-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Work Experience & <span className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg">
            Professional software engineering career journey and educational background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0f172a] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#4f46e5]" />
              Professional Experience
            </h3>

            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-light p-6 sm:p-7 rounded-2xl space-y-4 border border-[#e2e8f0]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-mono font-bold">
                    {exp.period}
                  </span>
                  <span className="text-xs text-[#64748b] font-mono flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4f46e5]" />
                    {exp.location}
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <h4 className="text-lg font-bold text-[#0f172a]">{exp.role}</h4>
                  <p className="text-xs font-semibold text-[#4f46e5] font-mono">{exp.company}</p>
                </div>

                <p className="text-sm text-[#475569] pt-3 border-t border-[#e2e8f0] leading-relaxed">
                  {exp.summary}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0f172a] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#4f46e5]" />
              Education & Certifications
            </h3>

            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-light p-6 sm:p-7 rounded-2xl space-y-4 border border-[#e2e8f0]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-mono font-bold">
                    {edu.period}
                  </span>
                  <span className="text-xs font-bold text-[#10b981] flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {edu.achievement}
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <h4 className="text-lg font-bold text-[#0f172a]">{edu.degree}</h4>
                  <p className="text-xs font-semibold text-[#4f46e5] font-mono">{edu.institution}</p>
                </div>

                <p className="text-sm text-[#475569] pt-3 border-t border-[#e2e8f0] leading-relaxed">
                  1200+ hours intensive engineering in MERN stack, Data Structures, Algorithms, and production software engineering practices.
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


