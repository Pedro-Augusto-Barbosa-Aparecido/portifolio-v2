import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-1/4 bg-zinc-900 p-10 rounded-lg border-1 border-slate-400 border-double shadow-md shadow-slate-900 flex flex-col items-start justify-start gap-8">
      <h1 className="font-bold text-slate-300 text-xl">
        Pedro Augusto - Portfolio
      </h1>
      <div className="flex flex-col items-start justify-start w-full h-full gap-2">
        <Link
          href="/portfolio"
          className="w-full py-4 bg-zinc-900 text-center border-2 border-solid border-zinc-300 shadow-sm rounded-lg hover:brightness-110 hover:shadow-zinc-400 hover:shadow-md hover:-translate-y-4 hover:scale-105 duration-500 ease-in-out"
        >
          View my Portfolio
        </Link>
        <Link
          href={session ? "/admin" : "/signin"}
          className="w-full py-4 bg-zinc-900 text-center border-2 border-solid border-zinc-300 shadow-sm rounded-lg hover:brightness-110 hover:shadow-zinc-400 hover:shadow-md hover:-translate-y-4 hover:scale-105 duration-500 ease-in-out"
        >
          {session ? "Go to dashboard" : "Sign In"}
        </Link>
      </div>
    </div>
  );
}
