"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { AlertCircle } from "lucide-react";
import { Error } from "../Error";
import { red } from "tailwindcss/colors";

const contactFormSchema = z.object({
  email: z.string().email({
    message: "Type a valid email!",
  }),
  message: z
    .string()
    .min(1, {
      message: "Type valid message!",
    })
    .transform((message) => message.trim())
    .refine((message) => message.length > 0, {
      message: "Type valid message!",
    }),
});

type ContactFormData = z.output<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function handleSendMessage(data: ContactFormData) {}

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="w-full flex flex-col items-center justify-start gap-5 -mt-3"
    >
      <div className="flex flex-col justify-start items-start w-full gap-4">
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label htmlFor="email" className="text-slate-200 font-medium text-lg">
            Your e-mail
          </label>
          <input
            autoComplete="off"
            placeholder="Comming soon..."
            disabled
            className={clsx(
              "bg-transparent disabled:cursor-not-allowed w-full h-6 border-b-2 border-b-slate-400 outline-none py-4 px-2 text-slate-200 autofill:text-slate-200",
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
            Message
          </label>
          <textarea
            autoComplete="off"
            placeholder="Comming soon..."
            disabled
            className={clsx(
              "bg-transparent disabled:cursor-not-allowed w-full h-32 border-[1px] border-zinc-700 border-b-2 resize-none border-b-slate-400 outline-none py-4 pt-2 px-2 text-slate-200 autofill:text-slate-200",
              { "border-b-red-500": !!errors.message?.message }
            )}
            {...register("message")}
          />
          {errors.message?.message && (
            <div className="flex items-center justify-start gap-2 mt-1">
              <AlertCircle color={red[500]} size={20} />
              <Error message={errors.message.message} />
            </div>
          )}
        </div>
      </div>
      {/* <Error message={error} /> */}
      <button
        disabled /* ={isSubmitting} */
        className="flex items-center justify-center bg-violet-800 w-full py-4 rounded-md text-lg font-medium hover:bg-violet-600 hover:shadow-md hover:shadow-slate-700 disabled:opacity-80 disabled:cursor-not-allowed"
      >
        Send message
      </button>
    </form>
  );
}
