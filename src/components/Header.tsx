import Image from "next/image";

import VSCodeSvg from "@/assets/vscode.svg";
import Link from "next/link";

export const ICON_SIZE = 18;

export function Header() {
  return (
    <header className="h-6 w-full p-4 flex justify-between items-center top-0 left-0 bg-zinc-800 rounded-t-md">
      <div className="flex items-center justify-center gap-2">
        <button className="rounded-full bg-red-600 w-3 h-3 border-0 outline-0" />
        <button className="rounded-full bg-yellow-600 w-3 h-3 border-0 outline-0" />
        <button className="rounded-full bg-green-600 w-3 h-3 border-0 outline-0" />
      </div>
      <span className="text-xs text-gray-500">
        Portifólio - Pedro Augusto B. Aparecido
      </span>
      <Link href="/" className="">
        <Image
          src={VSCodeSvg}
          alt="Visual Studio Code Icon"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      </Link>
    </header>
  );
}
