import { Slide } from "@/shared/types/slide.type";
import React from "react";
import { Choices } from "@/shared/types/choices.type";
import { FolderStructure } from "@/shared/types/folder-structure.type";

export interface SlideStackContextType {
  slideStack: Slide[];
  setSlideStack: React.Dispatch<React.SetStateAction<Slide[]>>;
}

export interface ChoicesContextType {
  choices: Choices;
  updateChoices: (choicesToUpdate: Partial<Choices>) => void;
}

export interface FolderStructureContextType {
  folderStructure: FolderStructure;
  setFolderStructure: React.Dispatch<React.SetStateAction<FolderStructure>>;
}