import Providers from "@/lib/Providers";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { NextProviders } from "./providers";
import Navbarr from "../components/Navbarr";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel Napiere | Portfolio",
  description: "Gabriel Napiere, a full-stack software engineer based in Manila, Philippines.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-100`}>
        <Providers>
          <NextProviders>
            <Navbarr />
            {children}
            <Toaster/>
            <Footer />
          </NextProviders>
        </Providers>
      </body>
    </html>
  );
}
