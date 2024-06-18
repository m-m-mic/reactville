import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourPagesSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourPagesBackground from "./TourPagesSlide.background.svg?react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { setNextSlide } from "@/shared/functions/setSlide";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourPagesSlideContent } from "@/shared/data/slideContent";

export default function TourPagesSlide() {
  const SLIDE_ID = Slide.TourPages;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { choices, updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourComponents = () => {
    setNextSlide(Slide.TourComponents, slideStack, setSlideStack);
  };

  const singlePage = () => {
    updateChoices({ [Slide.TourPages]: false });
  };

  const multiplePages = () => {
    updateChoices({ [Slide.TourPages]: true });
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Router Road</h1>

          <RvSlideContentChoice
            choice={choices.tourPages}
            undefinedChoice={
              <>
                {tourPagesSlideContent.undefined}
                <div className="action-buttons">
                  <RvButton onClick={singlePage} label="single!" />
                  <RvButton onClick={multiplePages} label="multiple!" />
                </div>
              </>
            }
            falseChoice={
              <>
                {tourPagesSlideContent.false}
                <div className="action-buttons">
                  <RvButton onClick={goToTourComponents} label="Components!" />
                </div>
              </>
            }
            trueChoice={
              <>
                {tourPagesSlideContent.true}
                <div className="action-buttons">
                  <RvButton onClick={goToTourComponents} label="Components!" />
                </div>
              </>
            }
          />
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
      <TourPagesBackground className="background" />
    </div>
  );
}
