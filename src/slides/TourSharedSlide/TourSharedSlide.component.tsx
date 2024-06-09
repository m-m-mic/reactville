import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./TourSharedSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

import { setNextSlide } from "@/shared/functions/setSlide";
import { RvButton } from "@/components/RvButton/RvButton.component";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";

export default function TourSharedSlide() {
  const SLIDE_ID = Slide.TourShared;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    const updatedState = getSlideState(SLIDE_ID, slideStack);
    setSlideState(updatedState);
    if (updatedState === SlideState.Present) {
      updateChoices({ [Slide.TourShared]: true });
    }
  }, [slideStack]);

  const goToResult = () => {
    setNextSlide(Slide.Result, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Shared Street</h1>
          <div className="text-body">
            We have almost reached the final destination of our stroll through town.
            <div className="text-divider"></div>
            One last stop: <b>Shared Street</b> and add one more thing to our current structure. If you ever need to add something
            to your project which doesn't neatly fit into your current project folders, it's best to create a new{" "}
            <b>‘shared’ folder</b>. Just like with everything else in your project, make sure to keep this folder organized with
            appropriate sub-folders.
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
  );
}
