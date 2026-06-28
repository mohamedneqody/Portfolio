import type { Metadata } from "next";
import { Cairo, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/backgrounds/BackgroundCanvas";

const cairo = Cairo({
  variable: "--font-inter", // Keep variable name so we don't need to change tailwind.config
  subsets: ["arabic", "latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// ✏️ REPLACE WITH YOUR INFO
export const metadata: Metadata = {
  title: "Algorithm Cities | معرض أعمال إبداعي",
  description:
    "معرض أعمال تفاعلي حديث يعرض مشاريع الذكاء الاصطناعي وتطوير الويب المتكامل.",
  keywords: [
    "portfolio",
    "AI",
    "Machine Learning",
    "Full Stack",
    "web development",
    "Data Science",
  ],
  authors: [{ name: "محمد نقودي" }],
  openGraph: {
    title: "Algorithm Cities | الذكاء الاصطناعي",
    description:
      "معرض أعمال تفاعلي يعرض مشاريع تعلم الآلة وتطبيقات الويب المتقدمة.",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algorithm Cities | الذكاء الاصطناعي",
    description:
      "معرض أعمال تفاعلي يعرض مشاريع تعلم الآلة وتطبيقات الويب المتقدمة.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { MouseEffects } from "@/components/ui/MouseEffects";
import { colors } from "@/styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0a0612" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen font-sans overflow-x-hidden cursor-none" style={{ backgroundColor: colors.background, color: colors.text.primary }}>
        <MouseEffects />
        
        {/* Global Purple Ambient Light */}
        <div className="pointer-events-none fixed top-0 left-0 w-full h-[120vh] z-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen opacity-10 blur-[120px]" style={{ backgroundColor: colors.primary }} />
        </div>
        
        {/* Global Advanced 3D Background - Kept but will be simplified later */}
        <BackgroundCanvas />
        
        {/* SVG Noise overlay for premium cinematic feel (Opacity 2%) */}
        <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
