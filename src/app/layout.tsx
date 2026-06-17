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
      <body className="min-h-screen bg-dark-bg text-text-primary font-sans overflow-x-hidden">
        {/* Global Advanced 3D Background */}
        <BackgroundCanvas />
        
        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
