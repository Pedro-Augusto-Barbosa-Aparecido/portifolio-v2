import Image from "next/image";

import LoginSideImage from "@/assets/login-side-image.png";

export default function SignIn() {
  return (
    <div className="flex w-screen h-full bg-zinc-800">
      <div className="h-full w-2/3 rounded-r-3xl">
        <Image
          src={LoginSideImage}
          alt=""
          quality={100}
          priority
          className="object-cover w-full h-full rounded-r-3xl"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-8 w-1/3 p-20">
        <span className="text-5xl text-zinc-200">Sign In</span>
        <p className="text-lg text-zinc-300 font-medium">
          If you do not have an account, register by contacting me to help me
          manage the site.
        </p>
      </div>
    </div>
  );
}
