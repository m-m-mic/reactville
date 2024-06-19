import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { setNextSlide } from "@/shared/functions/setSlide";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./ExplanationSlide.styles.css";
import { SlideContext } from "@/context/providers/SlideProvider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";

export default function ExplanationSlide() {
  const SLIDE_ID = Slide.Explanation;

  const { slideStack, setSlideStack } = useContext(SlideContext);

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
        <div className="foreground-wrapper small">
          <div className="slide-explanation">
            <RvSlideHeader title={getSlideTitle(SLIDE_ID)} showExploreButton={false} />
            <div className="text-body">
              In the following minutes we will walk you through each important decision when it comes to structuring your project.
              Each step of the way you will choose which path to follow next, that way you will end up with a recommended folder
              structure tailored to your needs.
              <span className="text-divider"></span>
              Before we start this Tour please remember that when working in a team knowing your way around a project is key, so
              think about taking your team along the way or at least have a quick chat about everyone’s ideal project structure.
              <span className="text-divider"></span>
              Having some prior experience with <b>npm</b>, <b>node</b>, and <b>React</b> is recommended, but we believe that
              anybody interested in programming can benefit from a stroll through <b>Reactville</b>!
            </div>
            <div className="action-buttons">
              <RvButton onClick={goToBoilerplate} label="Got it!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
