import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./LandingSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import LandingBackground from "./LandingSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";

export default function LandingSlide() {
  const SLIDE_ID = Slide.Landing;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToExplanation = () => {
    setNextSlide(Slide.Explanation, slideStack, setSlideStack);
  };

  const goToQuickSelectSlide = () => {
    setNextSlide(Slide.QuickSelect, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="landing-buttons">
          <RvButton onClick={goToExplanation} label="Start the tour!" />
          <RvButton onClick={goToQuickSelectSlide} label="Quick Select" />
        </div>
      </div>
      <LandingBackground className="background" />
    </div>
  );
}
