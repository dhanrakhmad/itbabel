import { Check, Gamepad2, Laptop, Smartphone, TrendingUp, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
};

const services: Service[] = [
  {
    id: "web-development",
    icon: Laptop,
    title: "Web Development",
    description:
      "Website dan platform digital yang cepat, aman, dan scalable — dari company profile hingga sistem informasi kompleks untuk instansi pemerintah.",
    skills: ["Next.js", "Laravel", "E-Commerce", "Company Profile"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan pengalaman pengguna yang lancar serta performa optimal.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "game",
    icon: Gamepad2,
    title: "Game Development",
    description:
      "Game 2D dan 3D berkualitas tinggi untuk edukasi, pelatihan, dan hiburan, dibangun dengan engine game terkini.",
    skills: ["Unity", "Unreal Engine", "Game 2D", "Game 3D"],
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Optimasi mesin pencari berbasis data agar website bisnis Anda ditemukan di halaman pertama Google dan menghasilkan lead organik.",
    skills: ["Audit SEO", "On-Page SEO", "Technical SEO", "Analytics"],
  },
];

export function Services() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Layanan Kami
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Solusi teknologi end-to-end
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Dari konsep hingga peluncuran, IT Babel menangani setiap
            tahapan pengembangan digital Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.id}
              id={service.id}
              className="transition-shadow duration-300 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-sm leading-6">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  {service.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
