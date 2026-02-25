"use client";

import { animate } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

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

export default function Footer() {
  return (
    <footer
      className="relative mt-8 w-full overflow-hidden bg-foreground text-background"
      style={{
        clipPath: "polygon(2rem 0, 100% 0, 100% 100%, 0 100%, 0 2rem)",
      }}
    >
      <div className="flex h-[calc(100svh-12rem)] w-full flex-col justify-between px-4 pb-12 pt-16 md:px-12">
        <div className="flex">
          <div className="select-none text-2xl uppercase text-background/70 md:text-3xl">
            © Code By
          </div>
        </div>

        <div className="flex justify-center overflow-hidden">
          <h2 className="select-none text-center text-5xl font-medium uppercase tracking-[0.5rem] text-background/70 sm:text-7xl md:text-9xl md:tracking-[2rem]">
            Lozzato
          </h2>
        </div>

        <div className="relative flex flex-row-reverse items-end justify-between md:flex-row md:items-start">
          <div className="flex flex-col gap-2 text-nowrap">
            <p className="text-xs text-background/70">Versão 2.0.0</p>
            <p className="text-xs font-bold text-background/70">
              2026 Copyright Lozzato Store
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 md:w-auto">
            <p className="text-xs text-background/70">Redes Sociais</p>
            <div className="flex items-start gap-4 font-bold text-background/70 md:flex-row md:items-center md:gap-6">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-12 md:bottom-24 md:right-12 md:top-auto md:translate-y-0">
        <button
          onClick={() => {
            animate(window.scrollY, 0, {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              onUpdate: (latest) => window.scrollTo(0, latest),
            });
          }}
          className="group flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-background/20 bg-background text-foreground transition-all duration-500 ease-out hover:-translate-y-1"
          aria-label={"Back to top"}
        >
          <ArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
