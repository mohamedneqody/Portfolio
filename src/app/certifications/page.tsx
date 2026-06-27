'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Download, ExternalLink, Award } from 'lucide-react';
import Link from 'next/link';
import { certificates, certificateCategories } from '@/lib/constants';
import GlassCard from '@/components/ui/GlassCard';

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = certificates;
    if (activeCategory !== 'الكل') {
      result = result.filter((c) => c.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'الكل': certificates.length };
    for (const cert of certificates) {
      counts[cert.category] = (counts[cert.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5 bg-[#0a0612]">
        <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#22D3EE]/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/50 transition-colors hover:text-[#22D3EE]"
          >
            <ArrowRight size={16} />
            العودة للرئيسية
          </Link>

          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-right">
              <div className="mb-2 inline-flex items-center gap-3">
                <Award size={32} className="text-[#22D3EE]" />
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                  <span className="bg-gradient-to-r from-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent">
                    {certificates.length}+
                  </span>{' '}
                  شهادة احترافية
                </h1>
              </div>
              <p className="max-w-xl text-white/50">
                شهادات معتمدة من أفضل المنصات العالمية في مجالات الذكاء الاصطناعي، تعلم الآلة، البرمجة، والأتمتة.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="ابحث عن شهادة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-12 pl-4 text-right text-white placeholder-white/30 outline-none backdrop-blur-md transition-colors focus:border-[#22D3EE]/50 focus:bg-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-end gap-3">
          {certificateCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative rounded-full px-5 py-2.5 text-sm font-bold text-white/60 transition-colors hover:text-white border border-white/5 bg-white/5"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="cert-active-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38BDF8]/20 to-[#7C3AED]/20 border border-[#38BDF8]/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : ''}`}>
                {cat}
                <span className="mr-1.5 text-xs text-white/30">
                  ({categoryCounts[cat] || 0})
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Results count */}
        <motion.p
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-right text-sm text-white/40"
        >
          عرض {filtered.length} شهادة
        </motion.p>

        {/* Certificates Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard
                  hover={true}
                  className="group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:bg-[rgba(56,189,248,0.05)] border border-white/5 hover:border-[#38BDF8]/30"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#7C3AED]/20 via-[#1a0a2e] to-[#22D3EE]/20">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Award size={60} className="text-white/10" />
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-bold text-[#22D3EE] backdrop-blur-md">
                      {cert.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-6 text-right">
                    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#38BDF8]">
                      {cert.title}
                    </h3>
                    <p className="mb-1 text-sm text-white/50">{cert.issuer}</p>
                    <p className="mb-4 text-xs text-white/30">{cert.date}</p>

                    {/* Actions */}
                    <div className="mt-auto flex items-center justify-end gap-4 border-t border-white/5 pt-4">
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-[#22D3EE] transition-colors"
                        >
                          <Download size={14} /> تحميل PDF
                        </a>
                      )}
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-[#38BDF8] transition-colors"
                        >
                          <ExternalLink size={14} /> تحقق
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <Award size={60} className="mx-auto mb-4 text-white/10" />
            <p className="text-xl text-white/30">لا توجد شهادات تطابق البحث</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
