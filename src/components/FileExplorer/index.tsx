"use client";

import { ReactNode, useState } from "react";

import * as Collapsible from "@radix-ui/react-collapsible";

import { CollapsibleButton } from "./CollapsibleButton";
import { EmptyExplorer } from "./EmptyExplorer";
import { Folder } from "./Folder";

import clsx from "clsx";

export type FilesType = {
  folderName: string;
  files: {
    fileId: string;
    filename: string;
    url: string;
  }[];
};

interface FileExplorerProps {
  folders: FilesType[];
  title: string;
  titleIcon: ReactNode;
}

export function FileExplorer({ folders, title, titleIcon }: FileExplorerProps) {
  const [folderExplorerIsOpened, setFolderExplorerIsOpened] =
    useState<boolean>(false);

  const hasFolders = folders.length > 0;

  return (
    <Collapsible.Root
      className={clsx(
        "bg-zinc-900 w-2 h-full border-r-transparent flex flex-col items-start justify-start transition-all duration-700 ease-in-out relative",
        { "w-80": folderExplorerIsOpened }
      )}
      open={folderExplorerIsOpened}
      onOpenChange={setFolderExplorerIsOpened}
    >
      <CollapsibleButton isOpenedCollapse={folderExplorerIsOpened} />
      <Collapsible.Content className="w-full h-full p-0 overflow-x-hidden overflow-y-auto scrollbar-thumb-slate-700 scrollbar-thin scrollbar-thumb-rounded-full">
        <div className="flex items-center justify-start py-2 pl-2 gap-2">
          {titleIcon}
          <span className="text-slate-500 text-sm font-bold">{title}</span>
        </div>
        {hasFolders ? (
          folders.map((folder) => (
            <Folder
              key={folder.folderName}
              folderName={folder.folderName}
              files={folder.files}
            />
          ))
        ) : (
          <EmptyExplorer />
        )}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
