"use client";

import { Suspense } from "react";

import Image from "next/image";

import DefaultAvatar from "@/assets/default-avatar.svg";
import ProfileImage from "@/assets/profile.jpeg";

export function Avatar() {
  return (
    <div className="rounded-full brightness-110 overflow-hidden flex items-center justify-center w-12 h-12 bg-zinc-600">
      <Suspense fallback={<DefaultAvatar />}>
        <Image src={ProfileImage} alt="" fill />
      </Suspense>
    </div>
  );
}
