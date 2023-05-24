import Link from "next/link";

interface ToolbarProps {
  createNewObjUrl: string;
  objectName: string;
}

export function Toolbar({ createNewObjUrl, objectName }: ToolbarProps) {
  return (
    <form className="w-full flex items-center justify-end gap-3">
      <input
        type="text"
        className="w-4/6 bg-gray-800 py-3 px-2 rounded-md placeholder:text-gray-600 text-sm text-gray-200 focus:outline-0 focus:border-green-600 border-2 border-gray-800"
        placeholder="Search by name..."
      />
      <button className="text-sm bg-green-700 py-3 px-4 rounded-md font-medium leading-snug hover:bg-green-600 border-2 border-green-700 hover:border-gray-300 transition-colors duration-500">
        Search
      </button>
      <Link
        className="text-sm bg-gray-800 py-3 px-4 rounded-md font-medium leading-snug hover:bg-gray-800 border-2 border-gray-800 hover:border-gray-300 transition-colors duration-500"
        href={createNewObjUrl}
      >
        Create {objectName}
      </Link>
    </form>
  );
}
