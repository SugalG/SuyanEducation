import "./globals.css";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import NavbarApplyWrapper from "@/components/NavbarApplyWrapper";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Providers from "./providers";
import { Toaster } from "sonner";
import GoogleTranslate from "@/components/GoogleTranslate"; // ✅ ADD

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
    <html lang="en">
      <body>
        <Providers>
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
          <GoogleTranslate/>
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
