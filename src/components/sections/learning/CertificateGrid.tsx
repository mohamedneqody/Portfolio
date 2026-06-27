"use client";

import { useMemo, useState } from "react";
import { Certificate } from "@/types";
import { CertificateCard } from "./CertificateCard";
import { EnhancedModal } from "./EnhancedModal";
import { Search, Filter, ChevronDown, Activity } from "lucide-react";

export function CertificateGrid({ certificates }: { certificates: Certificate[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Compute Provider Stats
  const providerStats = useMemo(() => {
    const stats: Record<string, number> = { All: certificates.length };
    certificates.forEach(c => {
      stats[c.provider] = (stats[c.provider] || 0) + 1;
    });
    // Sort descending by count, keep 'All' at front
    return Object.entries(stats).sort((a, b) => a[0] === 'All' ? -1 : b[0] === 'All' ? 1 : b[1] - a[1]);
  }, [certificates]);

  // Compute Skill Stats
  const topSkills = useMemo(() => {
    const stats: Record<string, number> = {};
    certificates.forEach(c => {
      c.skills.forEach(s => {
        // Weighted for highlighted certs
        const weight = c.provider === 'Google AI' ? 10 : (c.provider === 'Coursera' ? 5 : 3);
        stats[s] = (stats[s] || 0) + weight;
      });
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]).slice(0, 10);
  }, [certificates]);

  // Filter Data
  const filteredCerts = useMemo(() => {
    let result = certificates;

    if (selectedProvider !== "All") {
      result = result.filter(c => c.provider === selectedProvider);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.provider.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q)) ||
        c.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    // Sort: Featured first, then highest difficulty
    return result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.difficulty - a.difficulty;
    });
  }, [certificates, searchQuery, selectedProvider]);

  return (
    <section className="py-24 bg-[#05020a]">
      <div className="container mx-auto px-6">
        
        {/* Dynamic Provider Dashboard */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-bold text-white flex items-center gap-2">
            <Activity className="text-[#22D3EE]" /> Provider Dashboard
          </h2>
          <div className="flex flex-wrap gap-3">
            {providerStats.map(([provider, count]) => (
              <button
                key={provider}
                onClick={() => { setSelectedProvider(provider); setVisibleCount(24); }}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-all ${
                  selectedProvider === provider 
                    ? 'border-[#22D3EE] bg-[#22D3EE]/10 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                }`}
              >
                <span className="text-sm font-semibold">{provider}</span>
                <span className={`flex h-6 min-w-[24px] items-center justify-center rounded-full text-xs font-bold ${
                  selectedProvider === provider ? 'bg-[#22D3EE] text-black' : 'bg-white/10 text-white'
                }`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Top Skills */}
        <div className="mb-16">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">Most Valuable Skills Derived</h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map(([skill]) => (
              <span key={skill} className="rounded border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#b895ff]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Search & Sort */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              type="text"
              placeholder="Search by skill, technology, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder-white/40 focus:border-[#22D3EE] focus:outline-none focus:ring-1 focus:ring-[#22D3EE]"
            />
          </div>
          <div className="text-sm font-medium text-white/50">
            Showing {Math.min(visibleCount, filteredCerts.length)} of {filteredCerts.length} certificates
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCerts.slice(0, visibleCount).map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredCerts.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(v => v + 24)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              Load More <ChevronDown size={16} />
            </button>
          </div>
        )}

      </div>

      <EnhancedModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
