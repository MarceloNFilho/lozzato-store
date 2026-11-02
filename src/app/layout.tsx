import type { Metadata, Viewport } from "next";
import { Inter, Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import CartProvider from "@/providers/cart";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/ui/footer";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lozzato Store — Periféricos de alta performance",
    template: "%s · Lozzato Store",
  },
  description:
    "Teclados, mouses, fones e monitores selecionados para quem leva performance a sério. Frete grátis para todo o Brasil.",
};

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${saira.variable} ${inter.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col overflow-x-clip">
          <AuthProvider>
            <CartProvider>
              <TooltipProvider delayDuration={200}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </TooltipProvider>
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
