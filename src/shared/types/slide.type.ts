export interface SlideProps {
  slideStack?: Slide[];
  setNextSlide: (slide: Slide) => void;
  returnToLastSlide: () => void;
}

export interface Slide {
  id: SlideId;
  variant: number;
}

export enum SlideId {
  Landing = "landing",
  QuickSelect = "quickSelect",
  Boilerplate = "boilerplate",
  TourPages = "tourPages",
  TourComponents = "tourComponents",
}

export enum SlideState {
  Past = "past",
  Present = "present",
  Future = "future",
}
