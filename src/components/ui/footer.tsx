"use client";

import { animate } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    name: "Email",
    icon: <IoMdMail className="h-6 w-6" />,
    href: "mailto:marcelonfilho.ms@gmail.com",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram className="h-6 w-6" />,
    href: "https://instagram.com/marcelonfonatofilho",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/marcelonfilho/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="h-6 w-6" />,
    href: "https://github.com/MarceloNFilho",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Loja",
    links: [
      { label: "Catálogo", href: "/catalog" },
      { label: "Ofertas", href: "/deals" },
      { label: "Meus pedidos", href: "/orders" },
    ],
  },
  {
    title: "Categorias",
    links: [
      { label: "Teclados", href: "/category/keyboards" },
      { label: "Mouses", href: "/category/mouses" },
      { label: "Fones", href: "/category/headphones" },
      { label: "Monitores", href: "/category/monitors" },
    ],
  },
];

const BackToTopButton = ({ className }: { className?: string }) => (
  <button
    onClick={() => {
      animate(window.scrollY, 0, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }}
    className={cn(
      "group h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 ease-premium hover:-translate-y-1 md:h-16 md:w-16",
      className,
    )}
    aria-label="Voltar ao topo"
  >
    <ArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
  </button>
);

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-foreground font-display text-background [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
      <div className="page-container flex min-h-[min(calc(100svh-12rem),620px)] flex-col justify-between gap-12 pb-12 pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start justify-between">
            <div className="select-none text-2xl uppercase text-background/60 md:text-3xl">
              © Code By
            </div>
            <BackToTopButton className="flex md:hidden" />
          </div>

          <div className="flex gap-12 md:gap-20">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-background/40">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/70 transition-colors hover:text-background"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center overflow-hidden">
          <h2 className="select-none pl-[0.5rem] text-center text-5xl font-semibold uppercase tracking-[0.5rem] text-background/80 sm:text-7xl md:pl-[2rem] md:text-9xl md:tracking-[2rem]">
            Lozzato
          </h2>
        </div>

        <div className="relative flex flex-row-reverse items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-2 text-nowrap">
            <p className="text-xs text-background/50">Versão 2.0.0</p>
            <p className="text-xs font-bold text-background/70">
              2026 Copyright Lozzato Store
            </p>
          </div>

          <div className="flex w-full items-end gap-16 md:w-auto">
            <div className="flex w-full flex-col gap-3 md:w-auto">
              <p className="text-xs text-background/50">Redes Sociais</p>
              <div className="flex items-center gap-4 text-background/70 md:gap-6">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="transition-colors hover:text-background"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <BackToTopButton className="hidden md:flex" />
          </div>
        </div>
      </div>
    </footer>
  );
}
