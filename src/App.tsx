import { useState } from "react";

import "./App.css";
import "./shared/styles/slide.css";
import { GetOrientation } from "@/shared/functions/getOrientation";
import LandingSlide from "@/slides/LandingSlide/LandingSlide.component";
import BoilerplateSlide from "@/slides/BoilerplateSlide/BoilerplateSlide.component";
import TourPagesSlide from "@/slides/TourPagesSlide/TourPagesSlide.component";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { INITIAL_CHOICES, INITIAL_STACK, ChoicesContext, StackContext } from "@/context";


export default function App() {
  const [slideStack, setSlideStack] = useState(INITIAL_STACK);
  const [choices, setChoices] = useState(INITIAL_CHOICES);

  const getAspectRatioClass = () => {
    return GetOrientation();
  };

  const returnToStart = () => {
    setSlideStack(INITIAL_STACK);
  };

  return (
    <ChoicesContext.Provider value={{ choices, setChoices }}>
      <StackContext.Provider value={{ slideStack, setSlideStack }}>
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
