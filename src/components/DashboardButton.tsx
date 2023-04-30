import Link from "next/link";

import { Icon } from "lucide-react";
import { slate } from "tailwindcss/colors";

interface DashboardButtonProps {
  icon: Icon;
  title: string;
  href: string;
}

export function DashboardButton({
  icon: Icon,
  title,
  href,
}: DashboardButtonProps) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center flex-col gap-6 prose hover:brightness-125 hover:scale-110 ease-in-out duration-300 cursor-pointer"
    >
      <Icon size={72} color={slate[500]} />
      <span className="text-xl text-slate-500">{title}</span>
    </Link>
  );
}
