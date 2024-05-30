import { Slide } from "@/shared/types/slide.type";
import { ChoicesContextType, FolderStructureContextType, SlideStackContextType } from "@/shared/types/context.type";
import { Choices } from "@/shared/types/choices.type";
import { createContext } from "react";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";

export const INITIAL_STACK: Slide[] = [Slide.Landing];

export const INITIAL_STACK_CONTEXT: SlideStackContextType = {
  slideStack: INITIAL_STACK,
  setSlideStack: () => {},
};

export const INITIAL_CHOICES: Choices = { selectedChoices: {}, highlightedChoice: undefined };

export const INITIAL_CHOICES_STACK: ChoicesContextType = {
  choices: structuredClone(INITIAL_CHOICES),
  setChoices: () => {},
};

export const INITIAL_FOLDER_STRUCTURE_CONTEXT: FolderStructureContextType = {
  folderStructure: structuredClone(INITIAL_FOLDER_STRUCTURE),
  setFolderStructure: () => {},
};

export const StackContext = createContext(INITIAL_STACK_CONTEXT);
export const ChoicesContext = createContext(INITIAL_CHOICES_STACK);
export const FolderStructureContext = createContext(INITIAL_FOLDER_STRUCTURE_CONTEXT);
