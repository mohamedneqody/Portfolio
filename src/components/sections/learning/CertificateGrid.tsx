"use client";

import { useMemo, useState, useEffect } from "react";
import { Certificate } from "@/types";
import { CertificateCard } from "./CertificateCard";
import { EnhancedModal } from "./EnhancedModal";
import { Search, Filter, ChevronDown, Activity, FolderOpen } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export function CertificateGrid({ certificates }: { certificates: Certificate[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Sync state with URL parameter 'cert'
  useEffect(() => {
    const certId = searchParams.get('cert');
    if (certId) {
      const found = certificates.find(c => String(c.id) === certId);
      if (found) {
        setSelectedCert(found);
      }
    } else {
      setSelectedCert(null);
    }
  }, [searchParams, certificates]);

  const handleOpenCert = (cert: Certificate) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('cert', String(cert.id));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleCloseCert = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('cert');
    router.push(params.toString() ? `?${params.toString()}` : window.location.pathname, { scroll: false });
  };

  // Compute Category Stats
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { All: certificates.length };
    certificates.forEach(c => {
      if (c.category) {
        stats[c.category] = (stats[c.category] || 0) + 1;
      }
    });
    return Object.entries(stats).sort((a, b) => a[0] === 'All' ? -1 : b[0] === 'All' ? 1 : b[1] - a[1]);
  }, [certificates]);

  // Compute Skill Stats
  const topSkills = useMemo(() => {
    const stats: Record<string, number> = {};
    certificates.forEach(c => {
      c.skills.forEach(s => {
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
      result = result.filter(c => c.category === selectedProvider); // using category now
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
    <section className="py-24 bg-[#05020a]" id="certificates-grid">
      <div className="container mx-auto px-6">
        
        {/* Dynamic Category Dashboard */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-bold text-white flex items-center gap-2 justify-end">
            التصنيفات <FolderOpen className="text-[#22D3EE]" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryStats.map(([category, count]) => (
              <button
                key={category}
                onClick={() => { setSelectedProvider(category); setVisibleCount(24); }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all ${
                  selectedProvider === category 
                    ? 'border-[#22D3EE] bg-[#22D3EE]/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]' 
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className={`text-3xl font-black mb-2 ${selectedProvider === category ? 'text-[#22D3EE]' : 'text-white'}`}>
                  {count}
                </div>
                <div className={`text-sm font-semibold text-center ${selectedProvider === category ? 'text-white' : 'text-white/60'}`}>
                  {category}
                </div>
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

        {/* Grid or Empty State */}
        {filteredCerts.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCerts.slice(0, visibleCount).map((cert) => (
                <CertificateCard key={cert.id} cert={cert} onClick={() => handleOpenCert(cert)} />
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
          </>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/5 py-24 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white/40">
              <Search size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">No certificates found</h3>
            <p className="mb-6 text-white/50">We couldn't find anything matching "{searchQuery}"</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-white/40">Try searching for:</span>
              {['Python', 'LLM', 'Docker', 'Automation'].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => setSearchQuery(suggestion)}
                  className="rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-3 py-0.5 text-xs font-medium text-[#22D3EE] hover:bg-[#22D3EE]/20 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>

      <EnhancedModal 
        cert={selectedCert} 
        allCerts={certificates}
        onClose={handleCloseCert} 
        onSelectCert={handleOpenCert}
      />
    </section>
  );
}
