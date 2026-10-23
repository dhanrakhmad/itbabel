import type { Metadata } from "next";
import { Values } from "@/components/sections/values";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kenali profil IT Babel (CV. Script Babel Techno) — agensi teknologi di Pangkalpinang, Bangka Belitung. Visi, misi, dan nilai utama yang mendasari setiap proyek digital kami.",
};

export default function TentangPage() {
  return (
    <>
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Tentang Kami
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Profil IT Babel
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              IT Babel (CV. Script Babel Techno) adalah agensi teknologi
              yang berdiri di Pangkalpinang, Bangka Belitung. Kami membangun
              website, aplikasi mobile, game, dan optimasi SEO untuk
              instansi pemerintah serta perusahaan swasta — dengan pendekatan
              yang adil, kompeten, dan bersahabat.
            </p>
            <p>
              Berdiri dari semangat talenta lokal Bangka Belitung, kami
              percaya teknologi berkualitas tidak harus mahal dan jauh.
              Setiap proyek dikerjakan secara transparan, tepat waktu, dan
              berorientasi pada dampak nyata bagi bisnis serta masyarakat.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  Menjadi agensi teknologi terpercaya yang mendorong
                  transformasi digital Bangka Belitung dan Indonesia melalui
                  solusi berkualitas dan berdampak.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 text-sm leading-6 text-muted-foreground">
                  <li>
                    Membangun solusi digital berkualitas: website, mobile,
                    game, dan SEO.
                  </li>
                  <li>
                    Memberdayakan instansi pemerintah dan UMKM dengan
                    teknologi yang terjangkau.
                  </li>
                  <li>
                    Menerapkan standar keamanan, transparansi, dan tenggat
                    waktu yang dijunjung tinggi.
                  </li>
                  <li>
                    Mengembangkan talenta teknologi lokal Bangka Belitung.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Values />
    </>
  );
}
