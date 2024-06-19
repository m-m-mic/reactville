import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourStylesSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourStylesBackground from "./TourStylesSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourStylesSlideContent } from "@/shared/data/slideContent";

export default function TourStylesSlide() {
  const SLIDE_ID = Slide.TourStyles;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { choices, updateChoices } = useContext(ChoicesContext);
  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const fewStyles = () => {
    updateChoices({ [Slide.TourStyles]: false });
  };

  const manyStyles = () => {
    updateChoices({ [Slide.TourStyles]: true });
  };

  const goToTourStore = () => {
    setNextSlide(Slide.TourStore, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Style Square</h1>
          <RvSlideContentChoice
            slide={SLIDE_ID}
            choice={choices.tourStyles}
            undefinedChoice={
              <>
                {tourStylesSlideContent.undefined}
                <div className="action-buttons">
                  <RvButton onClick={fewStyles} label="few!" />
                  <RvButton onClick={manyStyles} label="many!" />
                </div>
              </>
            }
            falseChoice={
              <>
                {tourStylesSlideContent.false}
                <div className="action-buttons">
                  <RvButton onClick={goToTourStore} label="Store!" />
                </div>
              </>
            }
            trueChoice={
              <>
                {tourStylesSlideContent.true}
                <div className="action-buttons">
                  <RvButton onClick={goToTourStore} label="Store!" />
                </div>
              </>
            }
          />
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
      <TourStylesBackground className="background" />
    </div>
  );
}
