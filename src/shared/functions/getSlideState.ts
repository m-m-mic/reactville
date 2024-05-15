import { Slide, SlideState } from "../types/slide.type.ts";

export const getSlideState = (slideId: string, slideStack: Slide[]): SlideState => {
  if (slideStack.length > 0 && slideId === slideStack[slideStack.length - 1].id) {
    return SlideState.Present;
  }
  const pastSlides = [...slideStack].splice(-1);
  for (const slide of pastSlides) {
    if (slideId === slide.id) {
      return SlideState.Past;
    }
  }
  return SlideState.Future;
};
