"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SeesionProps {
  children: ReactNode;
}

export function Session({ children }: SeesionProps) {
  /* @ts-ignore */
  return <SessionProvider>{children}</SessionProvider>;
}
