"use client";

import {
  ChevronDown,
  HomeIcon,
  ListOrderedIcon,
  LogIn,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCart,
  ShoppingCartIcon,
  User,
  User2,
  UserIcon,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Skeleton } from "./skeleton";

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
        <Link href={"/"}>
          <Image
            src={logo}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            className="h-auto max-h-10 w-fit object-contain max-sm:max-h-9"
          />
        </Link>
        <div className="flex items-center gap-4">
          {status === "loading" && <Skeleton className="h-10 w-10 bg-accent" />}
          {data?.user ? (
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-10 w-10 cursor-pointer transition-all hover:brightness-110">
                      <AvatarFallback>
                        {data.user.name?.[0].toUpperCase()}
                      </AvatarFallback>
                      <AvatarImage
                        src={data.user.image ?? ""}
                        className="rounded-full object-cover"
                      />
                    </Avatar>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm font-bold">{data.user.name}</p>
                </TooltipContent>
              </Tooltip>

              <DropdownMenuContent className="w-[236px]">
                {data?.user && (
                  <>
                    <DropdownMenuItem className="p-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2"
                        onClick={handleMyOrdersClick}
                      >
                        <PackageSearchIcon size={16} />
                        Meus Pedidos
                      </Button>
                    </DropdownMenuItem>

                    <Separator />

                    <DropdownMenuItem className="p-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2"
                        onClick={() => router.push("/deals")}
                      >
                        <PercentIcon size={16} />
                        Ofertas
                      </Button>
                    </DropdownMenuItem>

                    <Separator />

                    <DropdownMenuItem className="p-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2"
                        onClick={() => router.push("/catalog")}
                      >
                        <ListOrderedIcon size={16} />
                        Catálogo
                      </Button>
                    </DropdownMenuItem>

                    <Separator />

                    <DropdownMenuItem className="p-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 hover:text-destructive"
                        onClick={handleLogOutClick}
                      >
                        <LogOutIcon size={16} />
                        <p className="text-sm font-bold">Sair</p>
                      </Button>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            status === "unauthenticated" && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    onClick={handleLoginClick}
                    variant="outline"
                    className="p-2"
                  >
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2"
                      onClick={handleLoginClick}
                    >
                      <User size={16} />
                      Entrar
                    </Button>
                  </DropdownMenuItem>

                  <Separator />

                  <DropdownMenuItem className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2"
                      onClick={() => router.push("/deals")}
                    >
                      <PercentIcon size={16} />
                      Ofertas
                    </Button>
                  </DropdownMenuItem>

                  <Separator />

                  <DropdownMenuItem className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2"
                      onClick={() => router.push("/catalog")}
                    >
                      <ListOrderedIcon size={16} />
                      Catálogo
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="p-2">
                <ShoppingCart size={20} />
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
    </div>
  );
};

export default Header;
