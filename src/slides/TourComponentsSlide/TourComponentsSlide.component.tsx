import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourComponentsSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourComponentsBackground from "./TourComponentsSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideContext } from "@/context/providers/SlideProvider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourComponentsSlideContent, tourComponentsWithPagesSlideContent } from "@/shared/data/slideContent";

export default function TourComponentsSlide() {
  const SLIDE_ID = Slide.TourComponents;

  const { slideStack, setSlideStack } = useContext(SlideContext);
  const { choices, updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const getChoiceContent = () => {
    if (choices[Slide.TourPages]) {
      return tourComponentsWithPagesSlideContent;
    }
    return tourComponentsSlideContent;
  };

  const chooseFewComponents = () => {
    updateChoices({ [Slide.TourComponents]: false });
  };

  const chooseManyComponents = () => {
    updateChoices({ [Slide.TourComponents]: true });
  };

  const goToTourStyles = () => {
    setNextSlide(Slide.TourStyles, slideStack, setSlideStack);
  };

  const goToTourStore = () => {
    setNextSlide(Slide.TourStore, slideStack, setSlideStack);
  };

  const getNavigationForFalseOption = () => {
    if (choices[Slide.TourPages]) {
      return goToTourStore();
    }
    return goToTourStyles();
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
            <RvSlideContentChoice
              choice={choices.tourComponents}
              undefinedChoice={
                <>
                  {getChoiceContent().undefined}
                  <div className="action-buttons">
                    <RvButton onClick={chooseFewComponents} label="Only a few!" />
                    <RvButton onClick={chooseManyComponents} label="Quite a lot!" />
                  </div>
                </>
              }
              falseChoice={
                <>
                  {getChoiceContent().false}
                  <div className="action-buttons">
                    <RvButton onClick={getNavigationForFalseOption} label="Let's go!" />
                  </div>
                </>
              }
              trueChoice={
                <>
                  {getChoiceContent().true}
                  <div className="action-buttons">
                    <RvButton onClick={goToTourStore} label="Let's go!" />
                  </div>
                </>
              }
            />
          </div>
          <div className="folder-structure-wrapper">
            <RvFolderStructure />
          </div>
        </div>
      </div>
      <TourComponentsBackground className="background" />
    </div>
  );
}
