'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, MessageCircle, Briefcase, GitBranch, Send } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-[#050510] py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/20 blur-[80px]" />
        <div className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#22D3EE]/15 blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-right">
        <AnimatedText
          text="تواصل معي"
          as="h2"
          className="mb-4 justify-start text-4xl font-bold text-white sm:text-5xl"
        />
        <motion.p
          className="mr-0 ml-auto mb-16 max-w-xl text-right text-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          هل لديك فكرة مشروع أو استفسار؟ لا تتردد في مراسلتي وسأرد عليك في أقرب وقت.
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 self-end rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-6 py-2 shadow-[0_0_15px_rgba(56,189,248,0.15)] mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38BDF8]"></span>
              </span>
              <span className="text-sm font-bold text-[#38BDF8]">متاح لمشاريع العمل الحر</span>
            </div>

            <GlassCard hover={true} className="flex items-center gap-6 p-6 transition-colors duration-300 hover:bg-[#38BDF8]/10 border border-white/5 hover:border-[#38BDF8]/30">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Mail size={24} />
              </div>
              <div className="text-right flex-1">
                <h4 className="mb-1 font-semibold text-white">البريد الإلكتروني</h4>
                <a href="mailto:mohameb.eslam460@gmail.com" className="text-sm text-white/60 hover:text-[#38BDF8] transition-colors font-mono">
                  mohameb.eslam460@gmail.com
                </a>
              </div>
            </GlassCard>

            <GlassCard hover={true} className="flex items-center gap-6 p-6 transition-colors duration-300 hover:bg-[#38BDF8]/10 border border-white/5 hover:border-[#38BDF8]/30">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <MessageSquare size={24} />
              </div>
              <div className="text-right flex-1">
                <h4 className="mb-1 font-semibold text-white">شبكات التواصل</h4>
                <div className="flex justify-end gap-4 mt-2">
                  <a href="https://wa.me/201559308442" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#38BDF8] transition-colors"><MessageCircle size={20} /></a>
                  <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-[#38BDF8] transition-colors"><Briefcase size={20} /></a>
                  <a href="#" aria-label="GitHub" className="text-white/50 hover:text-[#38BDF8] transition-colors"><GitBranch size={20} /></a>
                </div>
              </div>
            </GlassCard>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-right">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group relative">
                    <input
                      type="text"
                      id="name"
                      required
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white/90 outline-none transition-all focus:border-[#38BDF8] focus:bg-[rgba(56,189,248,0.05)] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                      placeholder=" "
                      dir="rtl"
                    />
                    <label
                      htmlFor="name"
                      className="pointer-events-none absolute right-4 top-4 text-white/60 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-[#38BDF8] peer-valid:-translate-y-8 peer-valid:text-xs peer-valid:text-[#38BDF8]"
                    >
                      الاسم
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      id="email"
                      required
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white/90 outline-none transition-all focus:border-[#38BDF8] focus:bg-[rgba(56,189,248,0.05)] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                      placeholder=" "
                      dir="rtl"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute right-4 top-4 text-white/60 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-[#38BDF8] peer-valid:-translate-y-8 peer-valid:text-xs peer-valid:text-[#38BDF8]"
                    >
                      البريد الإلكتروني
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    id="subject"
                    required
                    className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white/90 outline-none transition-all focus:border-[#38BDF8] focus:bg-[rgba(56,189,248,0.05)] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    placeholder=" "
                    dir="rtl"
                  />
                  <label
                    htmlFor="subject"
                    className="pointer-events-none absolute right-4 top-4 text-white/60 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-[#38BDF8] peer-valid:-translate-y-8 peer-valid:text-xs peer-valid:text-[#38BDF8]"
                  >
                    الموضوع
                  </label>
                </div>

                <div className="group relative">
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white/90 outline-none transition-all focus:border-[#38BDF8] focus:bg-[rgba(56,189,248,0.05)] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    placeholder=" "
                    dir="rtl"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute right-4 top-4 text-white/60 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-[#38BDF8] peer-valid:-translate-y-8 peer-valid:text-xs peer-valid:text-[#38BDF8]"
                  >
                    رسالتك
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] px-8 py-4 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] disabled:pointer-events-none disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        إرسال الرسالة <Send size={18} className="transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                      </motion.span>
                    )}
                    {formState === 'submitting' && (
                      <motion.span key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        جاري الإرسال...
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white" />
                      </motion.span>
                    )}
                    {formState === 'success' && (
                      <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-white">
                        تم الإرسال بنجاح!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
