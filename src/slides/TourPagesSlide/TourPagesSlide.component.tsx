import "./TourPagesSlide.styles.css";
import TourPagesBackground from "./TourPagesSlide.background.svg?react";
import ArrowBackIcon from "@/assets/icons/arrow-back_icon.svg?react";
import { useContext, useEffect, useState } from "react";
import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideContext } from "@/context/providers/SlideProvider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideContentChoice from "@/components/RvSlideContentChoice/RvSlideContentChoice.component";
import { tourPagesSlideContent } from "@/shared/data/slideContent";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";

export default function TourPagesSlide() {
  const SLIDE_ID = Slide.TourPages;

  const { slideStack, setSlideStack } = useContext(SlideContext);
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

  const revertChoice = () => {
    updateChoices({ [Slide.TourPages]: undefined });
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
              choice={choices.tourPages}
              undefinedChoice={
                <>
                  {tourPagesSlideContent.undefined}
                  <div className="action-buttons">
                    <RvButton onClick={singlePage} label="Just one page!" />
                    <RvButton onClick={multiplePages} label="Several pages!" />
                  </div>
                </>
              }
              falseChoice={
                <>
                  {tourPagesSlideContent.false}
                  <div className="action-buttons">
                    {goBackButton}
                    <RvButton onClick={goToTourComponents} label="Let's go!" />
                  </div>
                </>
              }
              trueChoice={
                <>
                  {tourPagesSlideContent.true}
                  <div className="action-buttons">
                    {goBackButton}
                    <RvButton onClick={goToTourComponents} label="Let's go!" />
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
      <TourPagesBackground className="background" />
    </div>
  );
}
