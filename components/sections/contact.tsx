"use client";

import * as React from "react";
import { Check, Clock, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  nama: string;
  email: string;
  instansi: string;
  pesan: string;
};

type SubmitStatus = "idle" | "sending" | "sent";

type OfficeInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

const initialForm: FormState = {
  nama: "",
  email: "",
  instansi: "",
  pesan: "",
};

const officeInfo: OfficeInfo[] = [
  {
    icon: MapPin,
    label: "Alamat",
    value:
      "Jl. Jenderal Sudirman, Kota Pangkalpinang, Kepulauan Bangka Belitung",
  },
  {
    icon: Mail,
    label: "Email",
    value: "babeltechnoscript@gmail.com",
    href: "mailto:babeltechnoscript@gmail.com",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 813-7756-5004",
    href: "tel:+6281377565004",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin - Jumat, 08:00 - 17:00 WIB",
  },
];

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-destructive">
      {" "}
      *
    </span>
  );
}

export function Contact() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [status, setStatus] = React.useState<SubmitStatus>("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    // Bukti interaksi: data formulir berhasil ditangkap oleh Client Component.
    // Selanjutnya: kirim payload ini ke API endpoint atau Server Action.
    console.log("Pengiriman formulir IT Babel:", {
      nama: form.nama,
      email: form.email,
      perusahaan: form.instansi,
      pesan: form.pesan,
    });
    setStatus("sent");
    setForm(initialForm);
  }

  return (
    <section id="kontak" className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Kontak
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Mari berbincang
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Punya proyek atau pertanyaan? Kirim pesan kepada kami — tim
            IT Babel akan merespons dalam 1×24 jam kerja.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Kolom kiri: formulir kontak */}
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
              <CardDescription className="text-sm leading-6">
                Lengkapi formulir di bawah dan kami akan segera
                menghubungi Anda kembali.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nama">
                      Nama Lengkap
                      <RequiredMark />
                    </Label>
                    <Input
                      id="nama"
                      name="nama"
                      placeholder="John Doe"
                      required
                      value={form.nama}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email
                      <RequiredMark />
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instansi">Instansi / Perusahaan</Label>
                  <Input
                    id="instansi"
                    name="instansi"
                    placeholder="Dinas ... / CV. ..."
                    value={form.instansi}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pesan">
                    Pesan / Kebutuhan Proyek
                    <RequiredMark />
                  </Label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    placeholder="Ceritakan singkat kebutuhan proyek Anda..."
                    required
                    value={form.pesan}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
                    <Send />
                  </Button>
                  {status === "sent" && (
                    <p className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Check className="size-4" aria-hidden="true" />
                      Pesan berhasil terkirim.
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Kolom kanan: informasi kantor & peta */}
          <div className="space-y-6">
            <ul className="space-y-5">
              {officeInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-4.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Peta Lokasi Kantor IT Babel — Jl. Jenderal Sudirman, Pangkalpinang"
                src="https://www.google.com/maps?q=-2.1287,106.1022&z=15&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
