import { Award, HeartHandshake, Scale, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CompanyValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const values: CompanyValue[] = [
  {
    icon: Scale,
    title: "Adil & Amanah",
    description:
      "Transparansi di setiap penawaran dan pengerjaan: estimasi jujur, tenggat realistis, serta laporan yang dapat dipertanggungjawabkan untuk instansi pemerintah dan mitra bisnis.",
  },
  {
    icon: Award,
    title: "Kompeten",
    description:
      "Tim praktisi yang terus mengikuti perkembangan teknologi terkini — arsitektur web modern, pengembangan aplikasi, hingga optimasi SEO berstandar profesional.",
  },
  {
    icon: HeartHandshake,
    title: "Bersahabat",
    description:
      "Teknologi harus mudah dipahami semua pihak. Komunikasi terbuka, responsif, dan kolaboratif di setiap tahap, dari konsultasi awal hingga peluncuran produk.",
  },
];

export function Values() {
  return (
    <section className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nilai Perusahaan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tiga pilar yang kami pegang
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Setiap proyek IT Babel dibangun di atas tiga nilai utama yang
            menjadi budaya kerja kami sehari-hari.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              className="transition-shadow duration-300 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-6">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
