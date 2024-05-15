import { SlideId, SlideProps, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./LandingSlide.styles.css";
import { useEffect, useState } from "react";

export default function LandingSlide({ slideStack, setNextSlide }: SlideProps) {
  const SLIDE_ID = SlideId.Landing;

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToBoilerplateSlide = () => {
    setNextSlide({ id: SlideId.Boilerplate, variant: 0 });
  };

  const goToQuickSelectSlide = () => {
    setNextSlide({ id: SlideId.QuickSelect, variant: 0 });
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Landing!</span>
        <button onClick={goToBoilerplateSlide}>Let's go!</button>
        <button onClick={goToQuickSelectSlide}>Quick Select</button>
      </div>
      <div className="background">
        <div className="landing-layer-3"></div>
        <div className="landing-layer-2"></div>
        <div className="landing-layer-1"></div>
      </div>
    </div>
  );
}
