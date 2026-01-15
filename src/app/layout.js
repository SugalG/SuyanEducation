import "./globals.css";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import NavbarApplyWrapper from "@/components/NavbarApplyWrapper";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Providers from "./providers";
import { Toaster } from "sonner";
import GoogleTranslate from "@/components/GoogleTranslate";

import { Poppins } from "next/font/google";

/* ---------------- FONT SETUP (GLOBAL) ---------------- */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* ---------------- METADATA ---------------- */
export const metadata = {
  title: "Suyan Education",
  description: "Japan-focused education consultancy",
};

export default async function RootLayout({ children }) {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "site-settings" },
  });

  const destinations = await prisma.destination.findMany({
    select: {
      country: true,
      slug: true,
    },
    orderBy: { country: "asc" },
  });

  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>
          {/* Background frame */}
          <div className="site-frame" />

          <div className="site-content">
            {/* FIXED NAVBAR */}
            <NavbarApplyWrapper
              settings={settings}
              destinations={destinations}
            />

            {/* PAGE CONTENT */}
            <main className="min-h-screen pt-[140px] md:pt-[120px]">
              {children}
              <Toaster
                richColors
                duration={1500}
                position="top-center"
              />
            </main>

            <Footer settings={settings} />
          </div>

          {/* Floating Utilities */}
          <WhatsAppFloat />
          <GoogleTranslate />
        </Providers>
      </body>
    </html>
  );
}
