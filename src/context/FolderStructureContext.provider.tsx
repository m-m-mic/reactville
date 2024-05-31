import { createContext, ReactNode, useState } from "react";
import { INITIAL_FOLDER_STRUCTURE_CONTEXT } from "@/context/initial.context";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";

export const FolderStructureContext = createContext(INITIAL_FOLDER_STRUCTURE_CONTEXT);

export default function FolderStructureContextProvider({ children }: { children: ReactNode }) {
  const [folderStructure, setFolderStructure] = useState(structuredClone(INITIAL_FOLDER_STRUCTURE));

  return (
    <FolderStructureContext.Provider value={{ folderStructure, setFolderStructure }}>{children}</FolderStructureContext.Provider>
  );
}
