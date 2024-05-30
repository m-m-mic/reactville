import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./LandingSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import LandingBackground from "./LandingSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { StackContext } from "@/context";

export default function LandingSlide() {
  const SLIDE_ID = Slide.Landing;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToBoilerplateSlide = () => {
    setNextSlide(Slide.Boilerplate, slideStack, setSlideStack);
  };

  const goToQuickSelectSlide = () => {
    setNextSlide(Slide.QuickSelect, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1])) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="landing-buttons">
          <RvButton onClick={goToBoilerplateSlide} label="Let's go!" />
          <RvButton onClick={goToQuickSelectSlide} disabled={true} label="Quick Select" />
        </div>
      </div>
      <LandingBackground className="background" />
    </div>
  );
}
