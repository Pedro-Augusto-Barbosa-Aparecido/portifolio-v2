"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { GoogleLogo } from "@phosphor-icons/react";
import { zinc } from "tailwindcss/colors";

import { signIn } from "next-auth/react";
import { Error } from "../Error";

export function LoginWithGoogle() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignInWithGoogle() {
    const signResponse = await signIn("google");

    if (!signResponse?.error && signResponse?.ok) {
      return router.push("/admin", {
        forceOptimisticNavigation: true,
      });
    }

    setError("Error, try sign in later!");
  }

  return (
    <>
      <button
        onClick={handleSignInWithGoogle}
        className="flex items-center justify-center gap-4 w-full rounded-md bg-red-700 py-4 hover:bg-red-600 hover:shadow-md hover:shadow-slate-700"
      >
        <GoogleLogo weight="bold" size={20} color={zinc[100]} />
        <span>Login with google</span>
      </button>
      <Error message={error} />
    </>
  );
}
