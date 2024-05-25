import { SlideId, SlideProps, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourPagesSlide.styles.css";
import { useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourPagesBackground from "./tourPagesSlide.background.svg?react";

export default function TourPagesSlide({ slideStack, setNextSlide, returnToLastSlide }: SlideProps) {
  const SLIDE_ID = SlideId.TourPages;

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourComponentsMultiple = () => {
    setNextSlide({ id: SlideId.TourComponents, variant: 1 });
  };

  const goToTourComponentsSimple = () => {
    setNextSlide({ id: SlideId.TourComponents, variant: 0 });
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1].id)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="panel navigation">Nav here</div>
        <div className="explanation">
          <div className="panel title">Router Road</div>
          <div className="panel text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="panel buttons">
            <button onClick={goToTourComponentsSimple}>Simple!</button>
            <button onClick={goToTourComponentsMultiple}>Multiple!</button>
            <button onClick={() => returnToLastSlide()}>Return</button>
          </div>
        </div>
        <div className="panel folder-structure">folder here</div>
      </div>
      <TourPagesBackground className="background" />
    </div>
  );
}
