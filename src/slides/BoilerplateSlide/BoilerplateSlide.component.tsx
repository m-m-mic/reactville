import { SlideId, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { StackContext } from "@/App";
import { returnToLastSlide, setNextSlide } from "@/shared/functions/setSlide";

export default function BoilerplateSlide() {
  const SLIDE_ID = SlideId.Boilerplate;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourStart = () => {
    setNextSlide({ id: SlideId.TourPages, variant: 0 }, slideStack, setSlideStack);
  };

  const returnToLastSlideInStack = () => {
    returnToLastSlide(slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1].id)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Boilerplate!</span>
        <div className="landing-buttons">
          <RvButton onClick={goToTourStart} label="Start the Tour!" />
          <RvButton onClick={returnToLastSlideInStack} label="Back to Start" />
        </div>
      </div>
    </div>
  );
}
