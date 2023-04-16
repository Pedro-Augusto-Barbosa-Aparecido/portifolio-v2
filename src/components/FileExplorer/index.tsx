"use client";

import { useState } from "react";

import * as Collapsible from "@radix-ui/react-collapsible";

import { CollapsibleButton } from "./CollapsibleButton";
import clsx from "clsx";
import { EmptyExplorer } from "./EmptyExplorer";

export function FileExplorer() {
  const [folderExplorerIsOpened, setFolderExplorerIsOpened] =
    useState<boolean>(false);

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
      <Collapsible.Content className="w-full h-full py-4 px-6 overflow-x-hidden overflow-y-auto scrollbar-thumb-slate-700 scrollbar-thin scrollbar-thumb-rounded-full">
        <EmptyExplorer />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
