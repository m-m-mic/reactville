import { useState } from "react";

import "./App.css";
import "./shared/styles/slide.css";
import { GetOrientation } from "@/shared/functions/getOrientation";
import LandingSlide from "@/slides/LandingSlide/LandingSlide.component";
import BoilerplateSlide from "@/slides/BoilerplateSlide/BoilerplateSlide.component";
import TourPagesSlide from "@/slides/TourPagesSlide/TourPagesSlide.component";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { INITIAL_CHOICES, INITIAL_STACK, ChoicesContext, StackContext } from "@/context";
import ExplanationSlide from "@/slides/ExplanationSlide/ExplanationSlide.component";
import QuickSelectSlide from "@/slides/QuickSelectSlide/QuickSelectSlide.component";
import TourComponentsSlide from "@/slides/TourComponentsSlide/TourComponentsSlide.component";
import TourStylesSlide from "@/slides/TourStylesSlide/TourStylesSlide.component";
import TourStoreSlide from "@/slides/TourStoreSlide/TourStoreSlide.component";
import TourRequestsSlide from "@/slides/TourRequestsSlide/TourRequestsSlide.component";
import TourSharedSlide from "@/slides/TourSharedSlide/TourSharedSlide.component";
import ResultSlide from "@/slides/ResultSlide/ResultSlide.component";

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
          <QuickSelectSlide />
          <ExplanationSlide />
          <BoilerplateSlide />
          <TourPagesSlide />
          <TourComponentsSlide />
          <TourStylesSlide />
          <TourStoreSlide />
          <TourRequestsSlide />
          <TourSharedSlide />
          <ResultSlide />
          <img className="city-background" src="/tourCityBackground.svg" alt="" />
        </div>
      </StackContext.Provider>
    </ChoicesContext.Provider>
  );
}
