"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { BACKGROUND_IMAGES } from "@/bgConfig";
import DefaultImageBackground from "@/assets/bg-home.gif";

export function BgImage() {
  const pathname = usePathname();

  for (const image of BACKGROUND_IMAGES) {
    if (pathname.startsWith(image.path)) {
      return (
        <Image
          src={image.image}
          fill
          quality={100}
          priority
          alt=""
          className="absolute -z-10 top-0 left-0"
        />
      );
    }
  }

  return (
    <Image
      src={DefaultImageBackground}
      fill
      quality={100}
      priority
      alt=""
      className="absolute -z-10 top-0 left-0"
    />
  );
}
