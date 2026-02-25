import type { Metadata } from "next";
import { Outfit, Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import CartProvider from "@/providers/cart";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/ui/footer";

const saira = Saira({ subsets: ["latin"] });

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
      <body className={`${saira.className} dark`}>
        <div className="flex min-h-screen flex-col">
          <AuthProvider>
            <CartProvider>
              <TooltipProvider>
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
