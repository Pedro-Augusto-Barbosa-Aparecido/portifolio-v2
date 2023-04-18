"use client";

import { useState } from "react";

import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown, ChevronRight, Folder as FolderIcon } from "lucide-react";
import { gray } from "tailwindcss/colors";
import { File } from "./File";

interface FolderProps {
  folderName: string;
  files: {
    fileId: string;
    filename: string;
    url: string;
  }[];
}

export function Folder({ folderName, files }: FolderProps) {
  const [folderOpened, setFolderOpened] = useState<boolean>(false);

  return (
    <Collapsible.Root open={folderOpened} onOpenChange={setFolderOpened}>
      <Collapsible.Trigger className="flex items-center justify-start gap-2 hover:bg-slate-800 w-full px-2 py-1 overflow-hidden">
        {folderOpened ? (
          <ChevronDown color={gray[500]} size={14} />
        ) : (
          <ChevronRight color={gray[500]} size={14} />
        )}
        <div className="flex items-center justify-start gap-1">
          <FolderIcon size={16} color={gray[500]} />
          <span className="text-md text-gray-500 m-0 p-0">{folderName}</span>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content>
        {files.map((file) => (
          <File key={file.fileId} filename={file.filename} url={file.url} />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
