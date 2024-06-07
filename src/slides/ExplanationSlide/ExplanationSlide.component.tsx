import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { setNextSlide } from "@/shared/functions/setSlide";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./ExplanationSlide.styles.css";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";

export default function ExplanationSlide() {
  const SLIDE_ID = Slide.Explanation;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToBoilerplate = () => {
    setNextSlide(Slide.Boilerplate, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation small">
          <h1 className="slide-title">{getSlideTitle(SLIDE_ID)}</h1>
          <div className="text-body">
            In the following minutes we will walk you through each important decision when it comes to structuring your project.
            Each step of the way you will choose which path to follow next, that way you will end up with a recommended folder
            structure tailored to your needs.
            <span className="text-divider"></span>
            Before we start this Tour please remember that when working in a team knowing your way around a project is key, so
            think about taking your team along the way or at least have a quick chat about everyone’s ideal project structure.
            <span className="text-divider"></span>
            Having some prior experience with npm, node, and React is recommended, but we believe that anybody interested in
            programming can benefit from a stroll through Reactville!
          </div>
          <div className="action-buttons">
            <RvButton onClick={goToBoilerplate} label="Got it!" />
          </div>
        </div>
      </div>
    </div>
  );
}
