"use client";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signIn } from "next-auth/react";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Enter with valid e-mail!",
  }),
  password: z
    .string()
    .min(1, {
      message: "Enter with valid password",
    })
    .transform((password) => password.trim())
    .refine((password) => password.length >= 0, {
      message: "Enter with valid password",
    }),
});

type LoginFormData = z.output<typeof loginFormSchema>;

export function FormLogin() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  async function signInWithCredentials({ email, password }: LoginFormData) {
    const signResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!signResponse?.error && signResponse?.ok) {
      router.push("/admin", {
        forceOptimisticNavigation: true,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(signInWithCredentials)}
      className="w-full flex flex-col items-center justify-start gap-8"
    >
      <div className="flex flex-col justify-start items-start w-full gap-4">
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label htmlFor="email" className="text-slate-200 font-medium text-lg">
            E-mail
          </label>
          <input
            type="email"
            autoComplete="off"
            className="bg-transparent w-full h-6 border-b-2 border-b-slate-400 outline-none py-4 px-2 text-slate-200 autofill:text-slate-200"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label
            htmlFor="password"
            className="text-slate-200 font-medium text-lg"
          >
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            className="bg-transparent w-full h-6 border-b-2 border-b-slate-400 outline-none py-4 px-2 text-slate-200 autofill:text-slate-200"
            {...register("password")}
          />
        </div>
      </div>
      <button className="bg-violet-800 w-full py-4 rounded-md text-lg font-medium hover:brightness-125 hover:shadow-md hover:shadow-slate-700">
        Sign In
      </button>
    </form>
  );
}
