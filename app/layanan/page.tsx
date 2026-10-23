import type { Metadata } from "next";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan IT Babel: Web Development, Mobile App Development, Game Development, dan SEO Optimization — solusi teknologi end-to-end dari Pangkalpinang, Bangka Belitung.",
};

export default function LayananPage() {
  return <Services />;
}
