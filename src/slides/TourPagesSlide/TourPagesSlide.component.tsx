import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourPagesSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourPagesBackground from "./TourPagesSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";

export default function TourPagesSlide() {
  const SLIDE_ID = Slide.TourPages;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { updateChoices } = useContext(ChoicesContext);

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
          <div className="text-body">Lorem ipsum und so bla bla bla....</div>
          <RvButton onClick={singlePage} label="Only one page!" />
          <RvButton onClick={multiplePages} label="Lot's of pages!" />
          <div className="action-buttons">
            <RvButton onClick={goToTourComponents} label="Tour Components!" />
          </div>
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
      <TourPagesBackground className="background" />
    </div>
  );
}
