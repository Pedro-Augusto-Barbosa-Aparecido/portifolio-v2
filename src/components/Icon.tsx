import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
}

export function Icon({ icon }: IconProps) {
  return <div className="cursor-pointer hover:brightness-125">{icon}</div>;
}
