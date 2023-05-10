import { AdminSideBar } from "@/components/Sidebar/AdminSideBar";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="w-screen h-screen">
      <AdminSideBar />
      {children}
    </div>
  );
}
