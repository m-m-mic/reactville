import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourRequestsSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourRequestsBackground from "./TourRequestsSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { SlideContext } from "@/context/providers/SlideProvider";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourRequestsSlideContent } from "@/shared/data/slideContent";

export default function TourRequestsSlide() {
  const SLIDE_ID = Slide.TourRequests;

  const { slideStack, setSlideStack } = useContext(SlideContext);
  const { choices, updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const fewRequests = () => {
    updateChoices({ [Slide.TourRequests]: false });
  };

  const manyRequests = () => {
    updateChoices({ [Slide.TourRequests]: true });
  };

  const goToTourShared = () => {
    setNextSlide(Slide.TourShared, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <RvSlideHeader title={getSlideTitle(SLIDE_ID)} />
          <RvSlideContentChoice
            slide={SLIDE_ID}
            choice={choices.tourRequests}
            undefinedChoice={
              <>
                {tourRequestsSlideContent.undefined}
                <div className="action-buttons">
                  <RvButton onClick={fewRequests} label="few!" />
                  <RvButton onClick={manyRequests} label="many!" />
                </div>
              </>
            }
            falseChoice={
              <>
                {tourRequestsSlideContent.false}
                <div className="action-buttons">
                  <RvButton onClick={goToTourShared} label="Shared!" />
                </div>
              </>
            }
            trueChoice={
              <>
                {tourRequestsSlideContent.true}
                <div className="action-buttons">
                  <RvButton onClick={goToTourShared} label="Shared!" />
                </div>
              </>
            }
          />
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
      <TourRequestsBackground className="background" />
    </div>
  );
}
