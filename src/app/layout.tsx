import Providers from "@/lib/Providers";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import FloatingAction from "../components/theme/FloatingAction";
import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { NextProviders } from "./providers";
import Navbarr from "../components/Navbarr";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel Napiere | Portfolio",
  description: "Gabriel portfolio web developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-linear-to-r dark:from-gray-800 dark:to-slate-900">
        <Providers>
          <NextProviders>
            <Navbarr />
            {children}
            <Toaster/>
            <Footer />
            {/* <FloatingAction /> */}
          </NextProviders>
        </Providers>
      </body>
    </html>
  );
}
