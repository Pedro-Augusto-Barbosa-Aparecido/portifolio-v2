"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { gray } from "tailwindcss/colors";

export function LogoutButton() {
  return (
    <LogOut
      onClick={() => signOut()}
      className="hover:cursor-pointer hover:brightness-125"
      fill={gray[800]}
      color={gray[400]}
      size={28}
    />
  );
}
