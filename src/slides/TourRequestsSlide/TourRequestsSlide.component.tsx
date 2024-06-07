import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourRequestsSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import { setNextSlide } from "@/shared/functions/setSlide";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ModalContext } from "@/context/providers/ModalContext.provider";

export default function TourRequestsSlide() {
  const SLIDE_ID = Slide.TourRequests;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { openModal } = useContext(ModalContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourShared = () => {
    setNextSlide(Slide.TourShared, slideStack, setSlideStack);
  };

  const testGoBackToPages = () => {
    openModal(Slide.TourPages);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">API Avenue</h1>
          <div className="text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="action-buttons">
            <RvButton onClick={goToTourShared} label="Shared!" />
            <RvButton onClick={testGoBackToPages} label="TestGoBackToPages" />
          </div>
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
    </div>
  );
}
