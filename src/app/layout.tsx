import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/components/ui/footer";
import CartProvider from "@/providers/cart";
import { TooltipProvider } from "@/components/ui/tooltip";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lozzato Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark`}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <TooltipProvider>
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
              </TooltipProvider>
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
