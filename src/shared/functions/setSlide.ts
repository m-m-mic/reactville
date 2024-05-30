import { Slide } from "@/shared/types/slide.type";
import React from "react";

export const setNextSlide = (slide: Slide, slideStack: Slide[], setSlideStack: React.Dispatch<React.SetStateAction<Slide[]>>) => {
  setSlideStack([...slideStack, slide]);
};

export const returnToLastSlide = (slideStack: Slide[], setSlideStack: React.Dispatch<React.SetStateAction<Slide[]>>) => {
  const tempStack = [...slideStack];
  tempStack.splice(-1);
  setSlideStack(tempStack);
};
