import "./globals.css";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import NavbarApplyWrapper from "@/components/NavbarApplyWrapper";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Providers from "./providers";
import { Toaster } from "sonner";
import GoogleTranslate from "@/components/GoogleTranslate";
import { Poppins } from "next/font/google";
import TestNavbar from "@/components/TestNavbar";

/* ✅ REQUIRED: prevent build-time DB access */
export const dynamic = "force-dynamic";

/* FONT SETUP */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

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
      <body className="overflow-x-hidden">
        <Providers>
          <div className="site-frame" />

          <div className="site-content">
            {/* <NavbarApplyWrapper
              settings={settings}
              destinations={destinations}
            /> */}
            <TestNavbar/>

            <main className="min-h-screen">
              {children}
              <Toaster richColors duration={1500} position="top-center" />
            </main>

            <Footer settings={settings} />
          </div>

          <WhatsAppFloat />
          <GoogleTranslate />
        </Providers>
      </body>
    </html>
  );
}
