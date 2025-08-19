import Header from "@/components/header";
import "./globals.css";
import 'react-quill/dist/quill.snow.css'
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import MovingBackground from "@/components/GradientBackground";
import Head from "next/head";
import AnimatedCursor from "react-animated-cursor"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sander | Portfolio",
  description: "Junior full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
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
