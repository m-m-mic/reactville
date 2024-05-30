import { Slide } from "@/shared/types/slide.type";
import React from "react";
import { Choices } from "@/shared/types/choices.types";

export interface SlideStackContextType {
  slideStack: Slide[];
  setSlideStack: React.Dispatch<React.SetStateAction<Slide[]>>;
}

export interface ChoicesContextType {
  choices: Choices;
  setChoices: React.Dispatch<React.SetStateAction<Choices>>;
}
