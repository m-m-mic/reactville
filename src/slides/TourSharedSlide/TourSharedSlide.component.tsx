import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourSharedSlide.styles.css";
import { TransitionEvent, useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import TourSharedBackground from "./TourSharedSlide.background.svg?react";
import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideContext } from "@/context/providers/SlideProvider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";

export default function TourSharedSlide() {
  const SLIDE_ID = Slide.TourShared;

  const { slideStack, setSlideStack } = useContext(SlideContext);
  const { updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    const updatedState = getSlideState(SLIDE_ID, slideStack);
    setSlideState(updatedState);
  }, [slideStack]);

  const goToResult = () => {
    setNextSlide(Slide.Result, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  const setSharedChoiceToTrue = (event: TransitionEvent) => {
    if (slideState === SlideState.Present && event.target === event.currentTarget) {
      updateChoices({ [Slide.TourShared]: true });
    }
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground" onTransitionEnd={(event) => setSharedChoiceToTrue(event)}>
        <div className="foreground-wrapper">
          <div className="slide-explanation">
            <RvSlideHeader title={getSlideTitle(SLIDE_ID)} />
            <div className="text-body">
              We have almost reached the final destination of our stroll through town. One last stop: <b>Shared Street</b>.
              <div className="text-divider"></div>
              If you ever need to add something to your project which doesn't neatly fit into your current project folders, it's
              best to create a new <b>'shared' folder</b>. Just like with everything else in your project, make sure to keep this
              folder organized with appropriate sub-folders.
              <div className="text-divider"></div>
              But now, without further ado. We have finally arrived at...
            </div>
            <div className="action-buttons">
              <RvButton onClick={goToResult} label="Where?" />
            </div>
          </div>
          <div className="folder-structure-wrapper">
            <RvFolderStructure />
          </div>
        </div>
      </div>
      <TourSharedBackground className="background" />
    </div>
  );
}
