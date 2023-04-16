import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { zinc } from "tailwindcss/colors";

interface CollapsibleButtonProps {
  isOpenedCollapse: boolean;
}

export function CollapsibleButton({
  isOpenedCollapse,
}: CollapsibleButtonProps) {
  return (
    <Collapsible.Trigger className="bg-zinc-900 w-5 h-5 flex items-center justify-center rounded-full shadow-sm shadow-zinc-400 absolute top-1/2 -right-2">
      {isOpenedCollapse ? (
        <ChevronLeft color={zinc[300]} size={14} />
      ) : (
        <ChevronRight color={zinc[300]} size={14} />
      )}
    </Collapsible.Trigger>
  );
}
