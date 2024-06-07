import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { setNextSlide } from "@/shared/functions/setSlide";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./QuickSelectSlide.styles.css";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";

export default function QuickSelectSlide() {
  const SLIDE_ID = Slide.QuickSelect;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToResult = () => {
    setNextSlide(Slide.Result, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Quick Select!</span>
        <div className="landing-buttons">
          <RvButton onClick={goToResult} label="Result!" />
        </div>
      </div>
    </div>
  );
}
