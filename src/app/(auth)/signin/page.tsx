import Image from "next/image";

import LoginSideImage from "@/assets/login-side-image.png";

import { FormLogin } from "@/components/FormLogin";
import { LoginWithGoogle } from "@/components/FormLogin/loginWithGoogle";
import { ContactForm } from "@/components/FormLogin/ContactForm";

export default function SignIn() {
  return (
    <div className="flex w-screen h-full bg-zinc-800 overflow-hidden">
      <div className="h-full w-2/3 rounded-r-3xl">
        <Image
          src={LoginSideImage}
          alt=""
          quality={100}
          priority
          className="object-cover w-full h-full rounded-r-3xl"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-8 h-full w-1/3 px-14 pt-10 pb-20 overflow-auto scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-w-3">
        <span className="text-5xl text-zinc-200">Sign In</span>
        <p className="text-lg text-zinc-300 font-medium">
          If you do not have an account, register by contacting me to help me
          manage the site.
        </p>
        <FormLogin />
        <div className="w-full h-[1px] border-t-2 border-solid border-gray-600 relative">
          <span className="absolute text-gray-400 text-md font-medium -translate-y-1/2 -top-[3px] bg-zinc-800 text-center w-fit px-2 left-1/2 -translate-x-1/2">
            or
          </span>
        </div>
        <LoginWithGoogle />
        <div className="w-full h-[1px] border-t-2 border-solid border-gray-600 relative">
          <span className="absolute text-gray-400 text-md font-medium -translate-y-1/2 -top-[3px] bg-zinc-800 text-center w-fit px-2 left-1/2 -translate-x-1/2">
            x
          </span>
        </div>
        <span className="text-5xl text-zinc-200">Contact me</span>
        <ContactForm />
      </div>
    </div>
  );
}
