'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { bio, projects, technicalSkills } from '@/data/portfolioData';

const initialLogs = [
  { type: 'system', text: 'Shubham Jayswal CLI Sandbox v2.4 [x86_64-pc-linux-gnu]' },
  { type: 'system', text: 'Type "help" to see all available commands.' },
];

export default function TerminalSandbox() {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState(initialLogs);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, { type: 'user', text: `shubham@dev-machine:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available Commands:
  • help       : Show this help menu
  • about      : Read Shubham's background & location
  • skills     : List key technical skills & stack
  • projects   : View live production projects
  • experience : Show Moshi Moshi work summary
  • resume     : Open & download Shubham's Resume PDF
  • contact    : View email, phone & social links
  • clear      : Clear terminal screen output`
        });
        break;

      case 'about':
        newLogs.push({
          type: 'output',
          text: `${bio.name} — ${bio.title} (${bio.experienceYears} Years Experience)\nLocation: ${bio.location}\nSummary: ${bio.about}`
        });
        break;

      case 'skills':
        const skillNames = [
          ...technicalSkills.frontend.map(s => s.name),
          ...technicalSkills.backend.map(s => s.name),
          ...technicalSkills.databaseAndCloud.map(s => s.name)
        ].join(', ');
        newLogs.push({
          type: 'output',
          text: `Core Technical Stack:\n${skillNames}`
        });
        break;

      case 'projects':
        const projText = projects.map(p => `• [${p.badge}] ${p.title} (${p.subtitle})`).join('\n');
        newLogs.push({
          type: 'output',
          text: `Production Projects:\n${projText}`
        });
        break;

      case 'experience':
        newLogs.push({
          type: 'output',
          text: `Current Role: Software Developer @ Moshi Moshi Bengaluru (June 2024 - Present)\nKey Accomplishment: Built Kuku marketplace (500+ active users), Kesariya B2B app (200+ buyers), Redis caching layer, & Razorpay webhooks.`
        });
        break;

      case 'resume':
        window.open(bio.resume, '_blank');
        newLogs.push({
          type: 'output',
          text: `Opening resume PDF (/Shubham_Resume.pdf) in new tab...`
        });
        break;

      case 'contact':
        newLogs.push({
          type: 'output',
          text: `Email   : ${bio.email}\nPhone   : ${bio.phone}\nLinkedIn: ${bio.linkedin}\nGitHub  : ${bio.github}`
        });
        break;

      case 'clear':
        setLogs(initialLogs);
        setInput('');
        return;

      case 'sudo':
        newLogs.push({
          type: 'output',
          text: `Permission denied: Shubham is already the root admin of this portfolio! 🚀`
        });
        break;

      default:
        newLogs.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-indigo-500/30 text-indigo-300 text-xs font-semibold"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Developer Playground</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight"
          >
            Explore via <span className="text-gradient-accent">CLI Terminal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base"
          >
            Prefer command line? Type commands below to interact with my portfolio data directly.
          </motion.p>
        </div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-indigo-500/30 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm"
        >
          {/* Top Bar Header */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-400 font-semibold text-xs">shubham@dev-machine:~</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-indigo-400">ZSH</span>
            </div>
          </div>

          {/* Log Output Body */}
          <div className="p-4 sm:p-6 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto bg-[#090b10]/95 text-slate-300">
            {logs.map((log, index) => (
              <div key={index} className="leading-relaxed">
                {log.type === 'user' && (
                  <p className="text-emerald-400 font-semibold">{log.text}</p>
                )}
                {log.type === 'system' && (
                  <p className="text-indigo-300">{log.text}</p>
                )}
                {log.type === 'output' && (
                  <pre className="whitespace-pre-wrap text-slate-300 font-mono text-xs leading-relaxed pl-2 border-l-2 border-indigo-500/40 my-1">
                    {log.text}
                  </pre>
                )}
                {log.type === 'error' && (
                  <p className="text-red-400 font-semibold">{log.text}</p>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleCommand} className="bg-slate-900/80 px-4 py-3 border-t border-white/10 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">shubham@dev-machine:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type "help", "projects", or "resume"...'
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              aria-label="Send command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </motion.div>

      </div>
    </section>
  );
}
