import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

const services = [
  { label: "Web Development", href: "/layanan#web-development" },
  { label: "Mobile Apps", href: "/layanan#mobile-apps" },
  { label: "Game", href: "/layanan#game" },
  { label: "SEO", href: "/layanan#seo" },
];

const contact = {
  address:
    "Jl. Jenderal Sudirman, Kota Pangkalpinang, Kepulauan Bangka Belitung",
  email: "contact@itbabel.com",
  phone: "+62 812-3456-7890",
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Tentang */}
          <div className="space-y-4">
            <p className="text-base font-bold tracking-tight">IT Babel</p>
            <p className="text-sm leading-6 text-muted-foreground">
              CV. Script Babel Techno adalah perusahaan teknologi di
              Pangkalpinang yang membangun website, aplikasi, dan solusi
              digital premium untuk memajukan bisnis di Bangka Belitung dan
              seluruh Indonesia.
            </p>
          </div>

          {/* Kolom 2: Navigasi cepat */}
          <nav aria-label="Navigasi cepat">
            <p className="mb-4 text-sm font-semibold">Navigasi Cepat</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 3: Layanan */}
          <nav aria-label="Layanan kami">
            <p className="mb-4 text-sm font-semibold">Layanan Kami</p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 4: Kontak */}
          <div>
            <p className="mb-4 text-sm font-semibold">Hubungi Kami</p>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
              <li>
                <Link
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <span>{contact.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span>{contact.phone}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis pemisah + hak cipta */}
        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 IT Babel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
