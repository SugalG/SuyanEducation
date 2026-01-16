"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function NavbarApplyWrapper({ settings, destinations }) {
  const [open, setOpen] = useState(false);

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
      />

      <ApplyNowModal
        open={open}
        onClose={() => setOpen(false)}
        className="z-[9999]"
      />
    </>
  );
}
