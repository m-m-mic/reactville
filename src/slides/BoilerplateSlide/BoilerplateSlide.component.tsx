import { SlideId, SlideProps, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

export default function BoilerplateSlide({ slideStack, setNextSlide, returnToLastSlide }: SlideProps) {
  const SLIDE_ID = SlideId.Boilerplate;

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourStart = () => {
    setNextSlide({ id: SlideId.TourPages, variant: 0 });
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
          <RvButton onClick={() => returnToLastSlide()} label="Back to Start" />
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
