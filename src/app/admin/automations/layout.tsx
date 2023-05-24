import { ReactNode } from "react";

interface AutomationsLayoutProps {
  children: ReactNode;
}

export default function AutomationsLayout({
  children,
}: AutomationsLayoutProps) {
  return (
    <div className="flex justify-start items-start w-screen h-full">
      {children}
    </div>
  );
}
