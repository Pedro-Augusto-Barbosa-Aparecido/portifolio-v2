import { ReactNode } from "react";

import Image from "next/image";

import BgImageAyanokoji from "@/assets/bg-admin.gif";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="w-screen h-screen">
      <Image
        src={BgImageAyanokoji}
        fill
        quality={100}
        priority
        alt=""
        className="absolute -z-10 top-0 left-0"
      />
      {children}
    </div>
  );
}
