import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourPagesSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourPagesBackground from "./TourPagesSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { StackContext } from "@/context";

export default function TourPagesSlide() {
  const SLIDE_ID = Slide.TourPages;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourComponents = () => {
    setNextSlide(Slide.TourComponents, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1])) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="explanation">
          <div className="panel title">Router Road</div>
          <div className="panel text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="panel buttons">
            <button onClick={goToTourComponents}>Components</button>
          </div>
        </div>
        <div className="panel folder-structure">folder here</div>
      </div>
      <TourPagesBackground className="background" />
    </div>
  );
}
