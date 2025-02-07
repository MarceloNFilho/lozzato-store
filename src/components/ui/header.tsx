"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/lozzato-store-logo.svg";
import Cart from "./cart";
import { useRouter } from "next/navigation";
import { SignInDialog } from "./sign-in-dialog";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const { status, data } = useSession();
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);

  const handleLoginClick = async () => {
    setIsSignInDialogOpen(true);
  };

  const handleLogOutClick = async () => {
    await signOut();
  };

  const handleMyOrdersClick = () => {
    if (data?.user) {
      router.push("/orders");
    }
  };

  return (
    <div className="flex w-full items-center justify-between rounded-b-lg bg-card p-5 xl:mx-auto xl:min-w-[1280px] xl:p-0 xl:py-5">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="p-2">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="font-sm opacity-75">Boas compras!</p>
                  </div>
                </div>

                <Separator />
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              )}

              {status === "authenticated" && (
                <Button
                  onClick={handleLogOutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon size={16} />
                  Fazer LogOut
                </Button>
              )}

              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleMyOrdersClick}
              >
                <PackageSearchIcon size={16} />
                Meus Pedidos
              </Button>

              <SheetClose asChild>
                <Link href="/deals">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href={"/"}>
          <Image
            src={logo}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            className="h-auto max-h-8 w-fit object-contain"
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="p-2">
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>

      {isSignInDialogOpen && (
        <SignInDialog
          open={isSignInDialogOpen}
          onOpenChange={setIsSignInDialogOpen}
        />
      )}
    </div>
  );
};

export default Header;
