import { SlideId, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./LandingSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import LandingBackground from "./LandingSlide.background.svg?react";
import { StackContext } from "@/App";
import { setNextSlide } from "@/shared/functions/setSlide";

export default function LandingSlide() {
  const SLIDE_ID = SlideId.Landing;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToBoilerplateSlide = () => {
    setNextSlide({ id: SlideId.Boilerplate, variant: 0 }, slideStack, setSlideStack);
  };

  const goToQuickSelectSlide = () => {
    setNextSlide({ id: SlideId.QuickSelect, variant: 0 }, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1].id)) {
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
