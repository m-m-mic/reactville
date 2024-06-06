import { Slide } from "@/shared/types/slide.type";

export interface Choices {
  [Slide.TourPages]: boolean | undefined;
  [Slide.TourComponents]: boolean | undefined;
  [Slide.TourStyles]: boolean | undefined;
  [Slide.TourStore]: boolean | undefined;
  [Slide.TourRequests]: boolean | undefined;
  [Slide.TourShared]: boolean | undefined;
}
