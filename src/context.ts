import { Slide } from "@/shared/types/slide.type";
import { ChoicesContextType, FolderContextType, SlideStackContextType } from "@/shared/types/context.type";
import { Choices } from "@/shared/types/choices.type";
import { createContext } from "react";
import { initialFolderStructure } from "@/shared/data/initialFolderStructure";

export const INITIAL_STACK: Slide[] = [Slide.Landing];

export const INITIAL_STACK_CONTEXT: SlideStackContextType = {
  slideStack: INITIAL_STACK,
  setSlideStack: () => {},
};

export const INITIAL_CHOICES: Choices = { selectedChoices: {}, highlightedChoice: undefined };

export const INITIAL_CHOICES_STACK: ChoicesContextType = {
  choices: INITIAL_CHOICES,
  setChoices: () => {},
};

export const INITIAL_FOLDER_CONTEXT: FolderContextType = {
  folder: initialFolderStructure,
  setFolder: () => {},
};

export const StackContext = createContext(INITIAL_STACK_CONTEXT);
export const ChoicesContext = createContext(INITIAL_CHOICES_STACK);
export const FolderContext = createContext(INITIAL_FOLDER_CONTEXT);
