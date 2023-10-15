import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import MovingBackground from "@/components/GradientBackground";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sander | Personal Portfolio",
  description: "Junior full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-950 text-gray-50 text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <MovingBackground />
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  );
}
