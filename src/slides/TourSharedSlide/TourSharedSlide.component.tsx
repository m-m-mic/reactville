import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourSharedSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import { setNextSlide } from "@/shared/functions/setSlide";
import { StackContext } from "@/context";

export default function TourSharedSlide() {
  const SLIDE_ID = Slide.TourShared;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToResult = () => {
    setNextSlide(Slide.Result, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1])) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="explanation">
          <h1 className="panel title">Shared Street</h1>
          <div className="panel text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="panel buttons">
            <button onClick={goToResult}>Result</button>
          </div>
        </div>
        <div className="panel folder-structure">folder here</div>
      </div>
    </div>
  );
}
