import Image from "next/image";

import EmptyExplorerImage from "@/assets/empty-explorer.png";

const IMAGE_SIZE = 256;

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src={EmptyExplorerImage}
        alt=""
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        priority
      />
      <span className="text-sm text-slate-600 font-bold">No page select!</span>
    </div>
  );
}
