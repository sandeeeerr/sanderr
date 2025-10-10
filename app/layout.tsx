import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ClientBackground from "@/components/client-background";
import StructuredData from "@/components/structured-data";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#09090b',
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sanderr.nl'),
  title: {
    default: "Sander de Vries | Full-Stack Developer",
    template: "%s | Sander de Vries"
  },
  description: "Portfolio of Sander de Vries - Junior Full-Stack Developer specializing in Next.js, React, and modern web development. View my projects, blog posts, and get in touch.",
  keywords: ["Sander de Vries", "Full-Stack Developer", "Next.js", "React", "Web Development", "Portfolio", "JavaScript", "TypeScript"],
  authors: [{ name: "Sander de Vries" }],
  creator: "Sander de Vries",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Sander de Vries | Full-Stack Developer",
    description: "Portfolio of Sander de Vries - Junior Full-Stack Developer specializing in Next.js and modern web development",
    siteName: "Sander de Vries Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sander de Vries | Full-Stack Developer",
    description: "Portfolio of Sander de Vries - Junior Full-Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'dns-prefetch': 'https://dev.sanderr.nl',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.className} App bg-zinc-950 text-gray-50 text-opacity-90 relative pt-28 sm:pt-36 max-w-full overflow-x-hidden`}
      >
        <ClientBackground />
          
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
