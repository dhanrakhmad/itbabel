"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Gamepad2,
  Globe,
  Search,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
} as const;

type FloatingCardProps = {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  className?: string;
  entranceDelay?: number;
  floatDuration?: number;
  floatDelay?: number;
};

function FloatingCard({
  icon: Icon,
  label,
  sublabel,
  className,
  entranceDelay = 0,
  floatDuration = 5,
  floatDelay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: entranceDelay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className={cn(
          "flex items-center gap-3 rounded-2xl border border-border bg-popover/85 p-3 shadow-lg backdrop-blur-md",
          className
        )}
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-4.5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">{label}</p>
          <p className="truncate text-xs text-muted-foreground">{sublabel}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Latar gradasi dekoratif */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 size-[36rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[28rem] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* Kolom kiri: teks */}
        <div className="max-w-xl">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Agensi Teknologi — Pangkalpinang, Bangka Belitung
            </span>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Solusi Teknologi Web, Mobile, Game &amp; SEO
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-pretty text-lg leading-8 text-muted-foreground"
          >
            IT Babel (CV. Script Babel Techno) dipercaya instansi pemerintah
            dan perusahaan swasta untuk membangun website, aplikasi, game,
            dan optimasi SEO yang berdampak nyata bagi bisnis Anda.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/kontak"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Konsultasi Gratis
              <ArrowRight />
            </Link>
            <Link
              href="/portofolio"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Lihat Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Kolom kanan: visual abstrak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Panel dasar */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-background to-primary/10 ring-1 ring-border"
          />
          {/* Pola grid teknologi */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:2.25rem_2.25rem] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          />
          {/* Sorotan tengah */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl"
          />

          <FloatingCard
            icon={Globe}
            label="Web Development"
            sublabel="Website & platform"
            className="left-2 top-6 sm:left-4 sm:top-8"
            entranceDelay={0.4}
            floatDuration={5}
          />
          <FloatingCard
            icon={Smartphone}
            label="Mobile Apps"
            sublabel="iOS & Android"
            className="right-2 top-20 sm:right-4 sm:top-24"
            entranceDelay={0.5}
            floatDuration={6}
            floatDelay={0.4}
          />
          <FloatingCard
            icon={Gamepad2}
            label="Game"
            sublabel="2D & 3D interactive"
            className="bottom-24 left-4 sm:left-6"
            entranceDelay={0.6}
            floatDuration={5.5}
            floatDelay={0.8}
          />
          <FloatingCard
            icon={Search}
            label="SEO"
            sublabel="Peringkat teratas"
            className="bottom-8 right-4 sm:right-8"
            entranceDelay={0.7}
            floatDuration={6.5}
            floatDelay={1.2}
          />
        </motion.div>
      </div>
    </section>
  );
}
