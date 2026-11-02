"use client";

import {
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  ShoppingBagIcon,
  User,
} from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import Cart from "./cart";
import Logo from "./logo";
import { useRouter, usePathname } from "next/navigation";
import { SignInDialog } from "./sign-in-dialog";
import { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { CartContext } from "@/providers/cart";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Catálogo", href: "/catalog" },
  { label: "Ofertas", href: "/deals" },
  { label: "Teclados", href: "/category/keyboards" },
  { label: "Mouses", href: "/category/mouses" },
  { label: "Fones", href: "/category/headphones" },
  { label: "Monitores", href: "/category/monitors" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { status, data } = useSession();
  const { itemsCount } = useContext(CartContext);
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    setIsSignInDialogOpen(true);
  };

  const handleLogOutClick = async () => {
    await signOut();
  };

  const iconButtonClass =
    "relative h-10 w-10 rounded-full text-foreground/80 [clip-path:none] hover:bg-black/[0.05] hover:text-foreground";

  return (
    <header
      className={cn(
        "main-header fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        isScrolled
          ? "border-b border-black/[0.06] bg-background/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-background/60 backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <div className="page-container flex h-16 items-center justify-between md:h-[72px]">
        <div className="flex items-center gap-2 xl:gap-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Abrir menu"
                className={cn(iconButtonClass, "-ml-2 xl:hidden")}
              >
                <MenuIcon size={20} strokeWidth={1.75} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col gap-10 pt-16">
              <span className="eyebrow">Navegação</span>
              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "border-b border-border py-4 font-display text-2xl font-semibold uppercase tracking-[0.06em] transition-colors hover:text-foreground",
                        pathname === link.href
                          ? "text-foreground"
                          : "text-foreground/60",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            aria-label="Lozzato Store — início"
            className="text-foreground transition-opacity hover:opacity-80"
          >
            <Logo className="text-[17px] md:text-lg" />
          </Link>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-display text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                  "text-foreground/60 hover:text-foreground",
                  isActive && "text-foreground",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-4 -translate-x-1/2 bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Minha conta"
                  className="rounded-full p-1 transition-opacity hover:opacity-80"
                >
                  <Avatar className="h-8 w-8 ring-1 ring-black/10">
                    <AvatarFallback className="text-xs font-semibold">
                      {data.user.name?.trim().charAt(0).toUpperCase() || "?"}
                    </AvatarFallback>
                    <AvatarImage
                      src={data.user.image ?? ""}
                      className="rounded-full object-cover"
                    />
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel className="flex flex-col gap-0.5 px-3 py-2.5">
                  <span className="text-sm font-semibold">
                    {data.user.name}
                  </span>
                  <span className="truncate text-xs font-normal text-muted-foreground">
                    {data.user.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => router.push("/orders")}>
                  <PackageSearchIcon />
                  Meus pedidos
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={handleLogOutClick}
                  className="text-destructive focus:text-destructive"
                >
                  <LogOutIcon />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            status === "unauthenticated" && (
              <Button
                size="icon"
                variant="ghost"
                aria-label="Entrar"
                onClick={handleLoginClick}
                className={iconButtonClass}
              >
                <User size={20} strokeWidth={1.75} />
              </Button>
            )
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                aria-label={`Carrinho com ${itemsCount} itens`}
                className={iconButtonClass}
              >
                <ShoppingBagIcon size={20} strokeWidth={1.75} />
                {itemsCount > 0 && (
                  <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold tabular-nums text-primary-foreground">
                    {itemsCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>

            <SheetContent>
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isSignInDialogOpen && (
        <SignInDialog
          open={isSignInDialogOpen}
          onOpenChange={setIsSignInDialogOpen}
        />
      )}
    </header>
  );
};

export default Header;
