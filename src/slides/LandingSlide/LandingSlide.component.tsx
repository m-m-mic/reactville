import { SlideId, SlideProps, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./LandingSlide.styles.css";
import { useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";

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

  if (isRemovedFromViewport(SLIDE_ID, slideStack[slideStack.length - 1].id)) {
    return null;
  }

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="landing-buttons">
          <RvButton onClick={goToBoilerplateSlide} label="Let's go!" />
          <RvButton onClick={goToQuickSelectSlide} label="Quick Select" />
        </div>
      </div>
      <div className="background">
        <img className="landing-fade-1" src="/landing/landing_fade1.svg" alt="" />
        <img className="landing-fade-4" src="/landing/landing_fade4.svg" alt="" />
        <img className="landing-move" src="/landing/landing_move.svg" alt="" />
        <img className="landing-fade-2" src="/landing/landing_fade2.svg" alt="" />
        <img className="landing-fade-3" src="/landing/landing_fade3.svg" alt="" />
      </div>
    </div>
  );
}
