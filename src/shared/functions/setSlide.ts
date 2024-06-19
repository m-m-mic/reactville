import { Slide } from "@/shared/types/slide.type";
import React from "react";

export const setNextSlide = (slide: Slide, slideStack: Slide[], setSlideStack: React.Dispatch<React.SetStateAction<Slide[]>>) => {
  setSlideStack([...slideStack, slide]);
};
