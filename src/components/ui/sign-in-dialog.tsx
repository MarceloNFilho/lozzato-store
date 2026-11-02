"use client";

import Image from "next/image";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { signIn } from "next-auth/react";
import { LogoSymbol } from "./logo";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignInDialog({ open, onOpenChange }: SignInDialogProps) {
  function handleSignInWithGoogleClick() {
    signIn("google");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90%] max-w-[380px] gap-8">
        <DialogHeader className="flex flex-col items-center gap-3 text-center sm:text-center">
          <LogoSymbol className="mb-1 h-9 w-9 text-foreground" />
          <DialogTitle>Entre na sua conta</DialogTitle>
          <DialogDescription className="max-w-[260px]">
            Acompanhe pedidos e finalize compras com mais rapidez.
          </DialogDescription>
        </DialogHeader>
        <Button
          size="md"
          className="w-full"
          onClick={handleSignInWithGoogleClick}
        >
          <Image
            src="/google.svg"
            alt=""
            width={16}
            height={16}
            className="brightness-0 invert"
          />
          Continuar com Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
