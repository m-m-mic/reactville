import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourComponentsSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import { setNextSlide } from "@/shared/functions/setSlide";
import { StackContext } from "@/context";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";

export default function TourComponentsSlide() {
  const SLIDE_ID = Slide.TourComponents;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourStyles = () => {
    setNextSlide(Slide.TourStyles, slideStack, setSlideStack);
  };

  const goToTourStore = () => {
    setNextSlide(Slide.TourStore, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1])) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Component Close</h1>
          <div className="text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="action-buttons">
            <RvButton onClick={goToTourStore} label="Store" />
            <RvButton onClick={goToTourStyles} label="Styles" />
          </div>
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
    </div>
  );
}
