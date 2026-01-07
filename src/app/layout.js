import "./globals.css";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import NavbarApplyWrapper from "@/components/NavbarApplyWrapper";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Providers from "./providers";
import { Toaster } from "sonner";

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
            {/* 🔥 IMPORTANT: USE THE WRAPPER */}

            <NavbarApplyWrapper
              settings={settings}
              destinations={destinations}
            />

            <main className="min-h-screen">
              {children}
              <Toaster richColors duration={1500} position="top-center" />
              </main>

            <Footer settings={settings} />
          </div>

          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
