'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import confetti from 'canvas-confetti';
import { bio } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      } catch (err) {}
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#ffffff] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#4f46e5] text-xs font-bold shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Let's Connect & <span className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">Build</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 card-light p-6 sm:p-8 rounded-2xl space-y-6 border border-[#e2e8f0]">
            <h3 className="text-xl font-bold text-[#0f172a] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#4f46e5]" />
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${bio.email}`}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#6366f1] transition-colors min-w-0"
              >
                <div className="p-3 rounded-lg bg-[#e0e7ff] text-[#4f46e5] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[#64748b] font-mono">Email Direct</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0f172a] break-all">
                    {bio.email}
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${bio.phone}`}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#6366f1] transition-colors min-w-0"
              >
                <div className="p-3 rounded-lg bg-[#e0e7ff] text-[#4f46e5] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[#64748b] font-mono">Phone / WhatsApp</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0f172a] break-all">
                    {bio.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] min-w-0">
                <div className="p-3 rounded-lg bg-[#e0e7ff] text-[#4f46e5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[#64748b] font-mono">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                    {bio.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex items-center gap-3">
              <a
                href={bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold btn-secondary-indigo flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold btn-secondary-indigo flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 card-light p-6 sm:p-8 rounded-2xl border border-[#e2e8f0]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e0e7ff] text-[#4f46e5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a]">Message Sent!</h3>
                <p className="text-sm text-[#64748b]">
                  Thank you for reaching out! I will respond to your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#64748b]">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none text-[#0f172a] text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#64748b]">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none text-[#0f172a] text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#64748b]">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none text-[#0f172a] text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#64748b]">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none text-[#0f172a] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-sm btn-primary-indigo flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

