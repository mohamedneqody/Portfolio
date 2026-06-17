"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, Globe, Mail, Heart, type LucideIcon } from "lucide-react";
import { socialLinks, siteConfig } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  github: Code,
  linkedin: Briefcase,
  twitter: Globe,
  mail: Mail,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, #A855F7 0%, transparent 50%), radial-gradient(circle at 75% 50%, #7C3AED 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        {/* Social Links */}
        <motion.div
          className="mb-8 flex items-center justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || Mail;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[rgba(124,58,237,0.3)] text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:text-white"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <Icon size={20} />
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mb-6 h-px w-48 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Built with love */}
        <motion.p
          className="mb-2 flex items-center justify-center gap-1 text-sm text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          تم التطوير بكل{" "}
          <Heart
            size={14}
            className="inline-block text-neutral-400 fill-neutral-400"
          />{" "}
          باستخدام Next.js و Framer Motion
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-center text-sm text-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © {currentYear}{" "}
          <span className="bg-gradient-to-r from-white to-[#888888] bg-clip-text text-transparent font-bold">
            algorithm cities
          </span>
          . جميع الحقوق محفوظة.
        </motion.p>
      </div>
    </footer>
  );
}
