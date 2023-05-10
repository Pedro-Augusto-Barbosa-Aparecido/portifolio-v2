import { Bot, FileBadge, Home } from "lucide-react";

import Link from "next/link";

import { gray } from "tailwindcss/colors";
import { LogoutButton } from "../LogoutButton";

export function AdminSideBar() {
  return (
    <aside className="h-screen absolute top-0 left-0 w-20 bg-gray-800 py-4 px-3 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-start gap-4">
        <Link href="/admin">
          <Home
            className="hover:cursor-pointer hover:brightness-125 hover:scale-105"
            fill={gray[800]}
            color={gray[400]}
            size={28}
          />
        </Link>
        <Link href="/admin/certificates">
          <FileBadge
            className="hover:cursor-pointer hover:brightness-125 hover:scale-105"
            fill={gray[800]}
            color={gray[400]}
            size={28}
          />
        </Link>
        <Link href="/admin/automations">
          <Bot
            className="hover:cursor-pointer hover:brightness-125 hover:scale-105"
            fill={gray[800]}
            color={gray[400]}
            size={28}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-start gap-4">
        <LogoutButton />
      </div>
    </aside>
  );
}
