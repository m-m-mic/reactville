import { Choices } from "@/shared/types/choices.type";
import { Slide } from "@/shared/types/slide.type";

export function getResultNameAndDescription(choices: Choices) {
  if (choices[Slide.TourPages] === false && choices[Slide.TourComponents] === false) {
    return { name: "The All-In-One", description: "Your application's core functionalities can all be found in the same place!" };
  }

  if (choices[Slide.TourStore] === true && choices[Slide.TourShared] === true) {
    return {
      name: "The Communicator",
      description: "Your application communicates a lot, both between components and with outside services!",
    };
  }

  if (choices[Slide.TourPages] === true && choices[Slide.TourComponents] === true) {
    return {
      name: "The Nest",
      description: "Your application has a lot of different features, a well thought out structure really helps here!",
    };
  }

  return {
    name: "The Conventional",
    description:
      "Your application is neither simple nor overly complex. No need to overcomplicate the folder structure either then!",
  };
}
