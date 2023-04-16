import type { Icon as LucideIcons } from "lucide-react";
import type { Icon as PhosphorIcons } from "@phosphor-icons/react";

import colors from "tailwindcss/colors";

export const SIDEBAR_ICON_SIZE = 24;

interface IconProps {
  icon: LucideIcons | PhosphorIcons;
  isActive?: boolean;
}

export function MenuIconButton({ icon: Icon, isActive = false }: IconProps) {
  return (
    <div
      data-active={isActive}
      className="cursor-pointer h-12 flex justify-center items-center hover:brightness-125 hover:bg-zinc-700 data-[active=true]:brightness-110 data-[active=true]:bg-zinc-800 data-[active=true]:border-l-2 border-l-zinc-100 w-full"
    >
      <Icon size={SIDEBAR_ICON_SIZE} color={colors.gray[400]} />
    </div>
  );
}
