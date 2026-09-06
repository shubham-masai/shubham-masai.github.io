'use client';

import Image from 'next/image';
import { ExternalLink, FolderGit2, CheckCircle } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#ffffff] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-bold shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Projects
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg">
            Production projects and web applications engineered for client and industry operations.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-light rounded-2xl overflow-hidden flex flex-col justify-between group border border-[#e2e8f0]"
            >
              {/* Project Card Image / Header */}
              <div className="relative w-full h-56 sm:h-64 bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title, Subtitle, Tech Tags & Live Link */}
              <div className="p-6 sm:p-7 space-y-4 bg-white border-t border-[#e2e8f0]">
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b]">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] text-[11px] font-mono font-semibold text-[#4f46e5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Action Button */}
                <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#64748b] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#10b981]" />
                    Production Ready
                  </span>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold btn-primary-indigo flex items-center gap-2 shrink-0 shadow-sm hover:scale-105 transition-transform"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


