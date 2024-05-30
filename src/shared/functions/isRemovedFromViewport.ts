import { relatedSlides } from "@/shared/data/relatedSlides";
import { Slide } from "@/shared/types/slide.type";

export function isRemovedFromViewport(slideId: Slide, slideStack: Slide[]) {
  const activeSlideId = slideStack[slideStack.length - 1];
  const inCurrentTour = slideId.startsWith("tour") && activeSlideId.startsWith("tour") && slideStack.includes(slideId);

  return activeSlideId !== slideId && !inCurrentTour && !relatedSlides[activeSlideId].includes(slideId);
}
