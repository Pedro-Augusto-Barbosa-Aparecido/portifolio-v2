import Image from "next/image";

import CryingLineIconSVG from "@/assets/crying-line-icon.svg";

const IMAGE_SIZE = 140;

export const metadata = {
  title: "Certificates",
};

export default function Certificate() {
  return (
    <div className="w-full h-full gap-4 flex flex-col items-center justify-center">
      <Image
        src={CryingLineIconSVG}
        alt=""
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <span className="text-sm text-slate-600 font-bold">
        No certificate selected!
      </span>
    </div>
  );
}
