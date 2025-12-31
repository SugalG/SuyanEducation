import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Suyan Education",
  description: "Japan-focused education consultancy",
};

export default async function RootLayout({ children }) {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "site-settings" },
  });

  return (
    <html lang="en">
      <body>
        {/* Global upper background */}
        <div className="site-frame" />

        {/* All scrollable content */}
        <div className="site-content">
          <Navbar settings={settings} />
          <main className="min-h-screen">{children}</main>
          
          
          <Footer settings={settings} />
          
        </div>
      </body>
    </html>
  );
}
