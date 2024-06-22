import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourRequestsSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import ArrowBackIcon from "@/assets/icons/arrow-back_icon.svg?react";
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

  const revertChoice = () => {
    updateChoices({ [Slide.TourRequests]: undefined });
  };

  const goBackButton = <RvButton iconLeft={<ArrowBackIcon />} title="Go back" onClick={revertChoice} />;

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
              slide={SLIDE_ID}
              choice={choices.tourRequests}
              undefinedChoice={
                <>
                  {tourRequestsSlideContent.undefined}
                  <div className="action-buttons">
                    <RvButton onClick={fewRequests} label="Not that many!" />
                    <RvButton onClick={manyRequests} label="A lot!" />
                  </div>
                </>
              }
              falseChoice={
                <>
                  {tourRequestsSlideContent.false}
                  <div className="action-buttons">
                    {goBackButton}
                    <RvButton onClick={goToTourShared} label="Let's go!" />
                  </div>
                </>
              }
              trueChoice={
                <>
                  {tourRequestsSlideContent.true}
                  <div className="action-buttons">
                    {goBackButton}
                    <RvButton onClick={goToTourShared} label="Let's go!" />
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
      <TourRequestsBackground className="background" />
    </div>
  );
}
