import Link from "next/link";

import { Icon } from "lucide-react";
import { gray } from "tailwindcss/colors";

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
      className="flex justify-center bg-gray-400 p-6 opacity-90 rounded-md items-center flex-col gap-6 prose hover:brightness-125 hover:scale-110 ease-in-out duration-300 cursor-pointer"
    >
      <Icon size={72} color={gray[700]} />
      <span className="text-xl text-black font-semibold drop-shadow-lg">
        {title}
      </span>
    </Link>
  );
}
