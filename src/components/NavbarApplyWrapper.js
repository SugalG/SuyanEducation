"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ApplyNowModal from "@/components/ApplyNowModal";
import { usePathname } from "next/navigation";
import NavigationBar from "./NavigationBar";

export default function NavbarApplyWrapper({ settings, destinations }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is homepage
  const isHomepage = pathname === "/";

  return (
    <>
      <NavigationBar
        settings={settings}
        destinations={destinations}
        onApplyNow={() => setOpen(true)}
        isHomepage={isHomepage}
      />

      <ApplyNowModal
        open={open}
        onClose={() => setOpen(false)}
        className=""
      />
    </>
  );
}