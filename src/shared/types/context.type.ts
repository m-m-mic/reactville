import { Slide } from "@/shared/types/slide.type";
import React from "react";

export interface SlideStackContext {
  slideStack: Slide[];
  setSlideStack: React.Dispatch<React.SetStateAction<Slide[]>>;
}
