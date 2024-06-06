import { Slide } from "@/shared/types/slide.type";
import {
  ChoicesContextType,
  FolderStructureContextType,
  ModalContextType,
  SlideStackContextType,
} from "@/shared/types/context.type";
import { Choices } from "@/shared/types/choices.type";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";
import { ModalProps } from "@/shared/types/modal.type";

export const INITIAL_SLIDE_STACK: Slide[] = [Slide.Landing];

export const INITIAL_SLIDE_STACK_CONTEXT: SlideStackContextType = {
  slideStack: INITIAL_SLIDE_STACK,
  setSlideStack: () => {},
};

export const INITIAL_CHOICES: Choices = {
  [Slide.TourPages]: undefined,
  [Slide.TourComponents]: undefined,
  [Slide.TourStyles]: undefined,
  [Slide.TourStore]: undefined,
  [Slide.TourRequests]: undefined,
  [Slide.TourShared]: undefined,
};

export const INITIAL_CHOICES_STACK: ChoicesContextType = {
  choices: structuredClone(INITIAL_CHOICES),
  updateChoices: () => {},
};

export const INITIAL_FOLDER_STRUCTURE_CONTEXT: FolderStructureContextType = {
  folderStructure: structuredClone(INITIAL_FOLDER_STRUCTURE),
  setFolderStructure: () => {},
};

export const INITIAL_MODAL: ModalProps = {
  open: false,
  returnTo: Slide.Landing,
  dismissText: "No, stay",
  confirmText: "Yes, go back",
};

export const INITIAL_MODAL_CONTEXT: ModalContextType = {
  modalProps: INITIAL_MODAL,
  openModal: () => {},
  closeModal: () => {},
};
