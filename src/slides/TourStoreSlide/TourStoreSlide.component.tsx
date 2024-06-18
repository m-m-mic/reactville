import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourStoreSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourStoreBackground from "./TourStoreSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourStoreSlideContent } from "@/shared/data/slideContent";

export default function TourStoreSlide() {
  const SLIDE_ID = Slide.TourStore;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { choices, updateChoices } = useContext(ChoicesContext);
  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const noStore = () => {
    updateChoices({ [Slide.TourStore]: false });
  };

  const yesStore = () => {
    updateChoices({ [Slide.TourStore]: true });
  };

  const goToTourRequests = () => {
    setNextSlide(Slide.TourRequests, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Store Mall</h1>
          <RvSlideContentChoice
            choice={choices.tourStore}
            undefinedChoice={
              <>
                {tourStoreSlideContent.undefined}
                <div className="action-buttons">
                  <RvButton onClick={noStore} label="no!" />
                  <RvButton onClick={yesStore} label="yes!" />
                </div>
              </>
            }
            falseChoice={
              <>
                {tourStoreSlideContent.false}
                <div className="action-buttons">
                  <RvButton onClick={goToTourRequests} label="API!" />
                </div>
              </>
            }
            trueChoice={
              <>
                {tourStoreSlideContent.true}
                <div className="action-buttons">
                  <RvButton onClick={goToTourRequests} label="API!" />
                </div>
              </>
            }
          />
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
      <TourStoreBackground className="background" />
    </div>
  );
}
