import { Slide } from "@/shared/types/slide.type";
import { ChoicesContextType, SlideStackContextType } from "@/shared/types/context.type";
import { Choices } from "@/shared/types/choices.types";
import { createContext } from "react";

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

export const StackContext = createContext(INITIAL_STACK_CONTEXT);
export const ChoicesContext = createContext(INITIAL_CHOICES_STACK);
