"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "cn";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        {/* Sisi kiri: brand (Updated dengan Logo) */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight flex items-center gap-2"
        >
          <Image 
            src="/logo.png" 
            alt="Logo IT Babel" 
            width={28} // Anda bisa sesuaikan ukurannya (misal: 24, 28, atau 32)
            height={28} 
            className="object-contain"
            priority // Prioritaskan loading gambar karena ini elemen LCP/Navbar
          />
          <span>IT Babel</span>
        </Link>

        {/* Sisi tengah: menu desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className={navigationMenuTriggerStyle()}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sisi kanan: CTA + menu mobile */}
        <div className="flex items-center gap-2">
          <Link
            href="/kontak"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "hidden sm:inline-flex"
            )}
          >
            Hubungi Kami
            <ArrowRight />
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label="Buka menu navigasi"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigasi utama website IT Babel</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <SheetFooter>
                <Link
                  href="/kontak"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full"
                  )}
                >
                  Hubungi Kami
                  <ArrowRight />
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
