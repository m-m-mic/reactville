import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { INITIAL_FOLDER_STRUCTURE_CONTEXT } from "@/context/initial.context";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";
import { removeHighlightFromAllFiles } from "@/shared/functions/setStructureFolderValue";
import { SlideContext } from "@/context/providers/SlideProvider";

export const FolderStructureContext = createContext(INITIAL_FOLDER_STRUCTURE_CONTEXT);

export default function FolderStructureContextProvider({ children }: { children: ReactNode }) {
  const [folderStructure, setFolderStructure] = useState(structuredClone(INITIAL_FOLDER_STRUCTURE));

  const { slideStack } = useContext(SlideContext);

  // Removes highlighting while slides are being changed and folder structure isn't visible
  useEffect(() => {
    new Promise((res) => setTimeout(res, 300)).then(() => {
      setFolderStructure(removeHighlightFromAllFiles(folderStructure));
    });
  }, [slideStack]);

  return (
    <FolderStructureContext.Provider value={{ folderStructure, setFolderStructure }}>{children}</FolderStructureContext.Provider>
  );
}
