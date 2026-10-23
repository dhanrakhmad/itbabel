import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi IT Babel (CV. Script Babel Techno) di Pangkalpinang, Bangka Belitung — kirim pesan, email, atau telepon untuk konsultasi gratis kebutuhan proyek digital Anda.",
};

export default function KontakPage() {
  return <Contact />;
}
