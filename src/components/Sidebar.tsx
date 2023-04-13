import { Files, Linkedin, Github } from "lucide-react";

import colors from "tailwindcss/colors";
import { Icon } from "./Icon";
import Link from "next/link";

export const SIDEBAR_ICON_SIZE = 24;

export function Sidebar() {
  return (
    <div className="h-full w-16 rounded-bl-md flex flex-col items-center justify-between py-4 gap-4 shadow-zinc-700 shadow-xl">
      <div className="flex flex-col gap-3 items-center justify-start">
        <Icon
          icon={<Files size={SIDEBAR_ICON_SIZE} color={colors.gray[400]} />}
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-end">
        <Link
          href="https://www.linkedin.com/in/pedro-augusto-barbosa-aparecido-195247217/"
          target="_blank"
        >
          <Icon
            icon={
              <Linkedin
                size={SIDEBAR_ICON_SIZE}
                color={colors.gray[400]}
                fill={colors.gray[400]}
              />
            }
          />
        </Link>
        <Link
          href="https://github.com/Pedro-Augusto-Barbosa-Aparecido"
          target="_blank"
        >
          <Icon
            icon={
              <Github
                size={SIDEBAR_ICON_SIZE}
                color={colors.gray[400]}
                fill={colors.gray[400]}
              />
            }
          />
        </Link>
      </div>
    </div>
  );
}
