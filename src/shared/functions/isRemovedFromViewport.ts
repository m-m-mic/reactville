import { relatedSlides } from "@/shared/data/relatedSlides";

export function isRemovedFromViewport(slideId: string, activeSlideId: string) {
  return slideId !== activeSlideId && !relatedSlides[activeSlideId].includes(slideId);
}
