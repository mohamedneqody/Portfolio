import { certificates } from "@/lib/constants";
import { Hero } from "@/components/sections/learning/Hero";
import { Roadmap } from "@/components/sections/learning/Roadmap";
import { CertificateGrid } from "@/components/sections/learning/CertificateGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Journey | Mohamed Nekody",
  description: "Knowledge → Practice → Production. View my 56 verified certifications translated into real AI engineering experience.",
};

export default function LearningJourneyPage() {
  return (
    <main className="min-h-screen bg-[#05020a]">
      <Hero />
      <Roadmap />
      <CertificateGrid certificates={certificates} />
      
      {/* What's Next Section */}
      <section className="border-t border-white/5 py-24 bg-[#0a0515]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">What's Next?</h2>
          <p className="mb-12 text-white/50">Learning never stops. Here's what I'm actively mastering right now.</p>
          
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            {[
              "MCP (Model Context Protocol)",
              "AI Browser Agents",
              "Computer Use Agents",
              "Advanced Multi-Agent Systems",
              "Voice AI"
            ].map((topic) => (
              <div key={topic} className="flex items-center gap-3 rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-6 py-3 text-[#b895ff]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED]/20 text-xs font-bold">✓</div>
                <span className="font-semibold">{topic}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-xs text-white/30 font-medium">Started June 2026</p>
        </div>
      </section>
    </main>
  );
}
