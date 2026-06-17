'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig, stats } from '@/lib/constants';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

// ──────────────────────────────────────────────
// About Section – Bio + Stats
// ──────────────────────────────────────────────

// Stats moved to Achievements.tsx

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  // GSAP scroll-triggered animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clip-path curtain reveal for the entire section
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          },
        );
      }

      // Bio paragraphs stagger
      if (bioRef.current) {
        const paragraphs = bioRef.current.querySelectorAll('.bio-p');
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bioRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#050510] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedText
          text="من أنا"
          as="h2"
          className="mb-16 justify-start text-4xl font-bold text-white sm:text-5xl"
        />

        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Profile image area ──────────────── */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            {/* Clip-path reveal container */}
            <div
              ref={imageRef}
              className="group aspect-[4/5] w-full overflow-hidden rounded-3xl relative"
            >
              {/* ✏️ REPLACE WITH YOUR PROFILE IMAGE (Avatar/Photo) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#050510] to-[#1a0a2e] z-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="absolute inset-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#7C3AED] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{siteConfig.name}</h3>
                <p className="text-[#38BDF8] font-medium">مهندس الذكاء الاصطناعي</p>
              </div>
            </div>

            {/* Decorative border accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-[#38BDF8]/20" />
          </div>

          {/* ── Bio text ───────────────────────── */}
          <div ref={bioRef} className="space-y-6 text-right flex flex-col items-end">
            <p className="bio-p text-lg leading-relaxed text-white/80">
              مرحباً! أنا <span className="font-semibold text-[#38BDF8]">{siteConfig.name}</span>،
              مهندس برمجيات متخصص في بناء أنظمة الذكاء الاصطناعي وتطبيقات الويب عالية الأداء. أجمع بين قوة البيانات وسرعة الواجهات لتقديم حلول أعمال متكاملة.
            </p>

            <p className="bio-p text-lg leading-relaxed text-white/60">
              أركز دائمًا على تحقيق نتائج ملموسة للعملاء من خلال الأتمتة والتقنيات الحديثة، مع الحفاظ على كود نظيف وقابل للتوسع.
            </p>

            {/* Decorative gradient line */}
            <motion.div
              className="h-[2px] w-20 bg-gradient-to-r from-[#38BDF8] to-[#7C3AED] my-6"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            />
            
            {/* Core Strengths */}
            <div className="bio-p w-full mb-6">
              <h4 className="text-white font-bold mb-4">أبرز نقاط القوة (Core Strengths):</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-end gap-3 text-white/70">
                  <span>تطوير أنظمة أتمتة تعتمد على الذكاء الاصطناعي</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]"></span>
                </li>
                <li className="flex items-center justify-end gap-3 text-white/70">
                  <span>بناء تطبيقات ويب متكاملة (Full Stack)</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]"></span>
                </li>
                <li className="flex items-center justify-end gap-3 text-white/70">
                  <span>تحليل البيانات وإنشاء تقارير تفاعلية</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]"></span>
                </li>
                <li className="flex items-center justify-end gap-3 text-white/70">
                  <span>أتمتة سير العمل السحابي (Workflow Automation)</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]"></span>
                </li>
              </ul>
            </div>
            
            <motion.a
              href="/cv.pdf"
              download
              className="bio-p mt-4 inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#38BDF8]/10 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              تحميل السيرة الذاتية
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </motion.a>
          </div>
        </div>


      </div>
    </section>
  );
}
