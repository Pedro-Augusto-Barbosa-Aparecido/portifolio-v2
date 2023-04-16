import Image from "next/image";

import EmptyExplorerImage from "@/assets/empty-explorer-image.webp";

const IMAGE_SIZE = 120;

export function EmptyExplorer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <Image
        src={EmptyExplorerImage}
        alt=""
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <span className="text-slate-600 text-sm font-semibold overflow-hidden w-36">
        No content to show :(
      </span>
    </div>
  );
}
