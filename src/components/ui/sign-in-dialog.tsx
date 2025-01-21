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
      <DialogContent className="w-[85%] max-w-[324px] rounded-xl">
        <DialogHeader className="flex gap-0.5">
          <DialogTitle>Faça login na plataforma</DialogTitle>
          <DialogDescription>
            Conecte-se usando sua conta do Google
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="outline"
          className="mt-1 flex items-center gap-2"
          onClick={handleSignInWithGoogleClick}
        >
          <Image src="/google.svg" alt="google" width={16} height={16} />
          <p className="text-sm font-bold">Google</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
