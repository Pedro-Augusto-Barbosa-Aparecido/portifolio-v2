"use client";

import { Certificate } from "@phosphor-icons/react";
import { Linkedin, Github } from "lucide-react";

import { MenuIconButton } from "./MenuIconButton";

import Link from "next/link";

export function Sidebar() {
  return (
    <div className="h-full w-16 rounded-bl-md flex flex-col items-center justify-between gap-4">
      <div className="flex h-full flex-col items-center justify-start w-full">
        <Link href="/portfolio/certificate" className="w-full">
          <MenuIconButton icon={Certificate} isActive />
        </Link>
      </div>
      <div className="flex h-full flex-col items-center w-full justify-end">
        <Link
          href="https://www.linkedin.com/in/pedro-augusto-barbosa-aparecido-195247217/"
          className="w-full"
          target="_blank"
        >
          <MenuIconButton icon={Linkedin} />
        </Link>
        <Link
          href="https://github.com/Pedro-Augusto-Barbosa-Aparecido"
          className="w-full"
          target="_blank"
        >
          <MenuIconButton icon={Github} />
        </Link>
      </div>
    </div>
  );
}
