import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { setNextSlide } from "@/shared/functions/setSlide";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./QuickSelectSlide.styles.css";
import { SlideContext } from "@/context/providers/SlideProvider";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";

export default function QuickSelectSlide() {
  const SLIDE_ID = Slide.QuickSelect;

  const { slideStack, setSlideStack } = useContext(SlideContext);

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
        <div className="foreground-wrapper">
          <div className="slide-explanation">
            <RvSlideHeader title={getSlideTitle(SLIDE_ID)} />
            <div className="action-buttons">
              <RvButton onClick={goToResult} label="Result!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
