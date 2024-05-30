import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { StackContext } from "@/context";
import "./ResultSlide.styles.css";

export default function ResultSlide() {
  const SLIDE_ID = Slide.Result;

  const { slideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Result!</span>
        <div className="landing-buttons"></div>
      </div>
    </div>
  );
}
