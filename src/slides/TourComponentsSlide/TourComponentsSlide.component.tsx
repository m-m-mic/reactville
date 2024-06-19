import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourComponentsSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourComponentsBackground from "./TourComponentsSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourComponentsSlideContent } from "@/shared/data/slideContent";

export default function TourComponentsSlide() {
  const SLIDE_ID = Slide.TourComponents;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { choices, updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const fewComponents = () => {
    updateChoices({ [Slide.TourComponents]: false });
  };

  const manyComponents = () => {
    updateChoices({ [Slide.TourComponents]: true });
  };

  const goToTourStyles = () => {
    setNextSlide(Slide.TourStyles, slideStack, setSlideStack);
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
          <h1 className="slide-title">Component Close</h1>
          <RvSlideContentChoice
            slide={SLIDE_ID}
            choice={choices.tourComponents}
            undefinedChoice={
              <>
                {tourComponentsSlideContent.undefined}
                <div className="action-buttons">
                  <RvButton onClick={fewComponents} label="few!" />
                  <RvButton onClick={manyComponents} label="many!" />
                </div>
              </>
            }
            falseChoice={
              <>
                {tourComponentsSlideContent.false}
                <div className="action-buttons">
                  <RvButton onClick={goToTourStyles} label="Styles!" />
                </div>
              </>
            }
            trueChoice={
              <>
                {tourComponentsSlideContent.true}
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
      <TourComponentsBackground className="background" />
    </div>
  );
}
