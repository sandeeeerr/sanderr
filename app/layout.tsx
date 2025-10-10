import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
// ClientLayout removed in favor of native app/loading.tsx fallback

// Lazy load MovingBackground to reduce initial bundle
const MovingBackground = dynamic(() => import("@/components/GradientBackground"), {
  ssr: false,
});

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

export const metadata = {
  title: "Sander | Portfolio",
  description: "Junior full-stack developer",
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
      <body
        className={`${inter.className} App bg-zinc-950 text-gray-50 text-opacity-90 relative pt-28 sm:pt-36 max-w-full overflow-x-hidden`}
      >
        <MovingBackground />
          
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
