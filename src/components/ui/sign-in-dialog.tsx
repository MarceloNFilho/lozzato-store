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
      <DialogContent 
        className="w-[85%] max-w-[324px]"
        style={{
          clipPath: "polygon(1rem 0px, 100% 0px, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0px 100%, 0px 1rem)",
        }}
      >
        <DialogHeader className="flex gap-0.5">
          <DialogTitle>Faça login na plataforma</DialogTitle>
          <DialogDescription>
            Conecte-se usando sua conta do Google
          </DialogDescription>
        </DialogHeader>
        <Button
          className="mt-1 flex items-center gap-2"
          onClick={handleSignInWithGoogleClick}
        >
          <Image
            src="/google.svg"
            alt="google"
            width={16}
            height={16}
            className="brightness-0"
          />
          <p className="text-sm font-bold">Google</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
