import { FileExplorer } from "@/components/FileExplorer";
import { ReactNode } from "react";

interface CertificateLayoutProps {
  children: ReactNode;
}

export default async function CertificateLayout({
  children,
}: CertificateLayoutProps) {
  return (
    <div className="flex justify-start items-start h-full">
      <FileExplorer />
      {children}
    </div>
  );
}
