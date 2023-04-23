"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import clsx from "clsx";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";

import { AlertCircle } from "lucide-react";

import { red } from "tailwindcss/colors";

import { Error } from "../Error";

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
  const [error, setError] = useState("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  async function signInWithCredentials({ email, password }: LoginFormData) {
    const signResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!signResponse?.error && signResponse?.ok) {
      return router.push("/admin", {
        forceOptimisticNavigation: true,
      });
    }

    setError(signResponse?.error!);
  }

  return (
    <form
      onSubmit={handleSubmit(signInWithCredentials)}
      className="w-full flex flex-col items-center justify-start gap-5"
    >
      <div className="flex flex-col justify-start items-start w-full gap-4">
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label htmlFor="email" className="text-slate-200 font-medium text-lg">
            E-mail
          </label>
          <input
            autoComplete="off"
            className={clsx(
              "bg-transparent w-full h-6 border-b-2 border-b-slate-400 outline-none py-4 px-2 text-slate-200 autofill:text-slate-200",
              { "border-b-red-500": !!errors.email?.message }
            )}
            {...register("email")}
          />
          {errors.email?.message && (
            <div className="flex items-center justify-start gap-2 mt-1">
              <AlertCircle color={red[500]} size={20} />
              <Error message={errors.email.message} />
            </div>
          )}
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
            className={clsx(
              "bg-transparent w-full h-6 border-b-2 border-b-slate-400 outline-none py-4 px-2 text-slate-200 autofill:text-slate-200",
              { "border-b-red-500": !!errors.password?.message }
            )}
            {...register("password")}
          />
          {errors.password?.message && (
            <div className="flex items-center justify-start gap-2 mt-1">
              <AlertCircle color={red[500]} size={20} />
              <Error message={errors.password.message} />
            </div>
          )}
        </div>
      </div>
      <Error message={error} />
      <button
        disabled={isSubmitting}
        className="flex items-center justify-center bg-violet-800 w-full py-4 rounded-md text-lg font-medium hover:bg-violet-600 hover:shadow-md hover:shadow-slate-700 disabled:opacity-80 disabled:cursor-not-allowed"
      >
        Sign In
      </button>
    </form>
  );
}
