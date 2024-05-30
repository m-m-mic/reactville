import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { INITIAL_STACK, StackContext } from "@/context";
import "./ResultSlide.styles.css";

export default function ResultSlide() {
  const SLIDE_ID = Slide.Result;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const returnToStart = () => {
    setSlideStack(INITIAL_STACK);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1])) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Result!</span>
        <div className="landing-buttons">
          <RvButton onClick={returnToStart} label="Back to Start" />
        </div>
      </div>
    </div>
  );
}
