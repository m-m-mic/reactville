import { createContext, useState } from "react";

import "./App.css";
import "./shared/styles/slide.css";
import { Slide, SlideId } from "@/shared/types/slide.type";
import { GetOrientation } from "@/shared/functions/getOrientation";
import LandingSlide from "@/slides/LandingSlide/LandingSlide.component";
import BoilerplateSlide from "@/slides/BoilerplateSlide/BoilerplateSlide.component";
import TourPagesSlide from "@/slides/TourPagesSlide/TourPagesSlide.component";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { ChoicesContextType, SlideStackContextType } from "@/shared/types/context.type";
import { Choices } from "@/shared/types/choices.types";

const INITIAL_STACK: Slide[] = [{ id: SlideId.Landing, variant: 0 }];

const INITIAL_STACK_CONTEXT: SlideStackContextType = {
  slideStack: INITIAL_STACK,
  setSlideStack: () => {},
};

const INITIAL_CHOICES: Choices = { selectedChoices: {}, highlightedChoice: undefined };

const INITIAL_CHOICES_STACK: ChoicesContextType = {
  choices: INITIAL_CHOICES,
  setChoices: () => {},
};

export const StackContext = createContext(INITIAL_STACK_CONTEXT);
export const ChoicesContext = createContext(INITIAL_CHOICES_STACK);

export default function App() {
  const [slideStack, setSlideStack] = useState(INITIAL_STACK);
  const stackContextValue = { slideStack, setSlideStack };

  const [choices, setChoices] = useState(INITIAL_CHOICES);
  const choicesValue = { choices, setChoices };

  const getAspectRatioClass = () => {
    return GetOrientation();
  };

  const returnToStart = () => {
    setSlideStack(INITIAL_STACK);
  };

  return (
    <ChoicesContext.Provider value={choicesValue}>
      <StackContext.Provider value={stackContextValue}>
        <div className={`view-container ${getAspectRatioClass()}`}>
          <div className="top-buttons">
            <RvButton label="Back to start" onClick={returnToStart} />
          </div>
          <LandingSlide />
          <BoilerplateSlide />
          <TourPagesSlide />
          <img className="city-background" src="/tourCityBackground.svg" alt="" />
        </div>
      </StackContext.Provider>
    </ChoicesContext.Provider>
  );
}
