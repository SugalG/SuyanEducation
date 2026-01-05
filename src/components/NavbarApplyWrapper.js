"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ApplyNowModal from "@/components/ApplyNowModal";

export default function NavbarApplyWrapper({ settings, destinations }) {
  const [open, setOpen] = useState(false);

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
      />
    </>
  );
}
