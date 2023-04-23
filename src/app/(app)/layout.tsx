import { ReactNode } from "react";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="w-10/12 h-5/6 bg-zinc-800 shadow-xl rounded-md overflow-hidden">
      <Header />
      <div className="h-content-height flex justify-start items-start rounded-b-md">
        <aside className="bg-zinc-900 h-full rounded-bl-md flex items-start justify-start">
          <Sidebar />
        </aside>
        {children}
      </div>
    </div>
  );
}
