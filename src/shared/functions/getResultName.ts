import { Choices } from "@/shared/types/choices.type";
import { Slide } from "@/shared/types/slide.type";

export function getResultName(choices: Choices) {
  if (choices[Slide.TourPages] === false && choices[Slide.TourComponents] === false) {
    return "The All-In-One";
  }

  if (choices[Slide.TourStore] === true && choices[Slide.TourShared] === true) {
    return "The Communicator";
  }

  if (choices[Slide.TourPages] === true && choices[Slide.TourComponents] === true) {
    return "The Nest";
  }

  return "The Conventional";
}
