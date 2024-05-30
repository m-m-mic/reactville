import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { setNextSlide } from "@/shared/functions/setSlide";
import { StackContext } from "@/context";

export default function BoilerplateSlide() {
  const SLIDE_ID = Slide.Boilerplate;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourStart = () => {
    setNextSlide(Slide.TourPages, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1])) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Boilerplate!</span>
        <div className="landing-buttons">
          <RvButton onClick={goToTourStart} label="Start the Tour!" />
        </div>
      </div>
    </div>
  );
}
