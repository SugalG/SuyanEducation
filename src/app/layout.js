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
       
        <div className="site-frame" />

      
        <div className="site-content">
         
          <Navbar settings={settings} destinations={destinations} />

          <main className="min-h-screen">{children}</main>

          <Footer settings={settings} />
        </div>
      </body>
    </html>
  );
}
