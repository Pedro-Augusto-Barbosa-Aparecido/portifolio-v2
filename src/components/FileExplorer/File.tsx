import { FileBadge } from "lucide-react";
import { gray } from "tailwindcss/colors";

import Link from "next/link";

interface FileProps {
  filename: string;
  url: string;
}

export function File({ filename, url }: FileProps) {
  return (
    <Link
      href={url}
      className="flex items-center justify-start gap-2 py-1 pl-7 hover:bg-slate-800"
    >
      <FileBadge size={16} color={gray[500]} />
      <span className="text-sm text-gray-500">{filename}</span>
    </Link>
  );
}
