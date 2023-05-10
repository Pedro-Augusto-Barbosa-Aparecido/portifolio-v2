import Link from "next/link";

export default function Certificates() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div id="toolbar" className="flex items-center justify-end w-2/4">
        <Link
          href="#"
          className="bg-gray-800 rounded-md px-8 py-3 text-sm text-slate-300 shadow-md shadow-slate-400 hover:brightness-110 hover:shadow-lg hover:shadow-slate-400 ease-in-out duration-500 cursor-pointer"
        >
          Register Certificate
        </Link>
      </div>
    </div>
  );
}
