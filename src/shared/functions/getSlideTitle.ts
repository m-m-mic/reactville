import { Slide } from "@/shared/types/slide.type";
import { slideNames } from "@/shared/data/slideNames";

export function getSlideTitle(slide: Slide) {
  return slideNames[slide];
}
