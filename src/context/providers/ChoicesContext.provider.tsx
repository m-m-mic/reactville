import { createContext, ReactNode, useContext, useState } from "react";
import { INITIAL_CHOICES, INITIAL_CHOICES_STACK } from "@/context/initial.context";
import { Choices } from "@/shared/types/choices.type";
import { FolderStructureContext } from "@/context/providers/FolderStructureContext.provider";
import { updateChoicesAndFolderStructure } from "@/shared/functions/updateChoicesAndFolderStructure";

export const ChoicesContext = createContext(INITIAL_CHOICES_STACK);

export default function ChoicesContextProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState(structuredClone(INITIAL_CHOICES));

  const { folderStructure, setFolderStructure } = useContext(FolderStructureContext);

  const updateChoices = (choicesToUpdate: Partial<Choices>) => {
    const { updatedFolderStructure, updatedChoices } = updateChoicesAndFolderStructure(folderStructure, choices, choicesToUpdate);

    setChoices(updatedChoices);
    setFolderStructure(updatedFolderStructure);
  };

  return <ChoicesContext.Provider value={{ choices, updateChoices }}>{children}</ChoicesContext.Provider>;
}
