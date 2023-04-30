import { Avatar } from "./Avatar";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-zinc-900 h-16 px-3 opacity-95">
      <span className="text-xl text-slate-500 font-semibold">
        Administrator
      </span>
      <Avatar />
    </nav>
  );
}
