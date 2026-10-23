import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Portofolio IT Babel: proyek tepercaya untuk instansi pemerintah dan perusahaan swasta — sistem e-government, aplikasi mobile marketplace lokal, dan game edukasi interaktif.",
};

export default function PortofolioPage() {
  return <Portfolio showCta={false} />;
}
