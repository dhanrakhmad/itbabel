import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Domain resmi CV. Script Babel Techno (IT Babel).
const siteUrl = "https://itbabel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IT Babel — CV. Script Babel Techno",
    template: "%s | IT Babel",
  },
  description:
    "IT Babel (CV. Script Babel Techno) — perusahaan teknologi di Pangkalpinang, Bangka Belitung. Jasa pengembangan website, aplikasi, dan solusi digital premium untuk bisnis Anda.",
  keywords: [
    "IT Babel",
    "CV. Script Babel Techno",
    "jasa pembuatan website",
    "aplikasi custom",
    "Pangkalpinang",
    "Bangka Belitung",
    "IT company",
  ],
  authors: [{ name: "CV. Script Babel Techno" }],
  creator: "IT Babel",
  publisher: "CV. Script Babel Techno",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "IT Babel",
    title: "IT Babel — CV. Script Babel Techno",
    description:
      "Solusi digital premium: pengembangan website, aplikasi custom, dan konsultasi teknologi dari Bangka Belitung.",
    // Siapkan file gambar di public/og.png (rasio 1200x630).
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IT Babel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Babel — CV. Script Babel Techno",
    description:
      "Solusi digital premium: pengembangan website, aplikasi custom, dan konsultasi teknologi dari Bangka Belitung.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
