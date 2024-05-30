import { Slide, SlideState } from "@/shared/types/slide.type";

export const getSlideState = (slideId: string, slideStack: Slide[]): SlideState => {
  if (slideStack.length > 0 && slideId === slideStack[slideStack.length - 1]) {
    return SlideState.Present;
  }
  const pastSlides = [...slideStack];
  pastSlides.splice(-1);
  for (const slide of pastSlides) {
    if (slideId === slide) {
      return SlideState.Past;
    }
  }
  return SlideState.Future;
};
