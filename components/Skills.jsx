'use client';

import { Code2, CheckCircle2, CreditCard } from 'lucide-react';
import { skillsList } from '@/data/portfolioData';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-bold shadow-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Skills & <span className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">Technologies</span>
          </h2>

          <p className="text-[#64748b] text-base sm:text-lg">
            Core technologies, frameworks, and database tools I utilize to engineer scalable web platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="card-light p-4.5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 group border border-[#e2e8f0] bg-white hover:border-[#6366f1] transition-all"
            >
              {/* Tech Brand Logo Container */}
              <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain filter drop-shadow-xs"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="flex w-full h-full items-center justify-center text-[#4f46e5]">
                    <CreditCard className="w-6 h-6" />
                  </div>
                )}
                <div className="hidden w-full h-full items-center justify-center text-[#4f46e5]">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>

              {/* Skill Name ONLY */}
              <div>
                <h4 className="text-sm font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



