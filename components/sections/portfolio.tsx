import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Landmark,
  Store,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Project = {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    icon: Landmark,
    category: "E-Government",
    title: "Sistem Informasi Daerah E-Government",
    description:
      "Portal layanan publik yang mempermudah akses informasi dan pengaduan warga, meningkatkan transparansi pemerintah daerah.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    icon: Store,
    category: "Mobile",
    title: "Aplikasi Mobile Marketplace Lokal",
    description:
      "Marketplace UMKM lokal dengan pembayaran digital dan pelacakan pesanan real-time, mendorong perekonomian daerah.",
    tech: ["React Native", "Firebase", "TypeScript", "Midtrans"],
  },
  {
    icon: GraduationCap,
    category: "Game Edukasi",
    title: "Game Edukasi Interaktif Android",
    description:
      "Game berbasis kurikulum untuk siswa SD yang meningkatkan minat belajar melalui mekanik bermain yang menyenangkan.",
    tech: ["Unity", "C#", "Android", "Firebase"],
  },
];

export function Portfolio({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portofolio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Proyek yang kami banggakan
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Beberapa proyek perwakilan untuk instansi pemerintah dan
            perusahaan swasta yang menjadi mitra kami.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex h-full flex-col transition-shadow duration-300 hover:shadow-md"
            >
              {/* Visual placeholder kategori */}
              <div
                aria-hidden="true"
                className="relative flex h-40 shrink-0 items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-primary/5"
              >
                <project.icon className="size-10 text-primary/70" />
              </div>

              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {project.category}
                </Badge>
                <CardTitle className="mt-3 text-lg leading-snug">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4">
                <CardDescription className="text-sm leading-6">
                  {project.description}
                </CardDescription>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showCta && (
          <div className="mt-12 text-center">
            <Link
              href="/portofolio"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Lihat Semua Portofolio
              <ArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
