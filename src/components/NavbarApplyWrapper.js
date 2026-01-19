"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ApplyNowModal from "@/components/ApplyNowModal";
import { usePathname } from "next/navigation";

export default function NavbarApplyWrapper({ settings, destinations }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is homepage
  const isHomepage = pathname === "/";

  // Lock background scroll on mobile when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Navbar
        settings={settings}
        destinations={destinations}
        onApplyNow={() => setOpen(true)}
        isHomepage={isHomepage} // Pass the isHomepage prop here
      />

      <ApplyNowModal
        open={open}
        onClose={() => setOpen(false)}
        className="z-[9999]"
      />
    </>
  );
}