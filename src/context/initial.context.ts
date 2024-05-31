import { Slide } from "@/shared/types/slide.type";
import { ChoicesContextType, FolderStructureContextType, SlideStackContextType } from "@/shared/types/context.type";
import { Choices } from "@/shared/types/choices.type";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";

export const INITIAL_SLIDE_STACK: Slide[] = [Slide.Landing];

export const INITIAL_SLIDE_STACK_CONTEXT: SlideStackContextType = {
  slideStack: INITIAL_SLIDE_STACK,
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
