import { SlideId, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourPagesSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourPagesBackground from "./TourPagesSlide.background.svg?react";
import { ChoicesContext, StackContext } from "@/App";
import { returnToLastSlide, setNextSlide } from "@/shared/functions/setSlide";

export default function TourPagesSlide() {
  const SLIDE_ID = SlideId.TourPages;

  const { slideStack, setSlideStack } = useContext(StackContext);
  const { choices, setChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourComponentsMultiple = () => {
    setChoices({ selectedChoices: { ...choices.selectedChoices, pages: true }, highlightedChoice: "pages" });
    setNextSlide({ id: SlideId.TourComponents, variant: 1 }, slideStack, setSlideStack);
    setChoices({ ...choices, highlightedChoice: undefined });
  };

  const goToTourComponentsSimple = () => {
    setNextSlide({ id: SlideId.TourComponents, variant: 0 }, slideStack, setSlideStack);
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
        <div className="panel navigation">Nav here</div>
        <div className="explanation">
          <div className="panel title">Router Road</div>
          <div className="panel text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="panel buttons">
            <button onClick={goToTourComponentsSimple}>Simple!</button>
            <button onClick={goToTourComponentsMultiple}>Multiple!</button>
            <button onClick={returnToLastSlideInStack}>Return</button>
          </div>
        </div>
        <div className="panel folder-structure">folder here</div>
      </div>
      <TourPagesBackground className="background" />
    </div>
  );
}
