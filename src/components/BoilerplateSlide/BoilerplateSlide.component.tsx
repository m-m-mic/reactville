import { SlideId, SlideProps, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useEffect, useState } from "react";

export default function BoilerplateSlide({ slideStack, setNextSlide, returnToLastSlide }: SlideProps) {
  const SLIDE_ID = SlideId.Boilerplate;

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourStart = () => {
    setNextSlide({ id: SlideId.TourPages, variant: 0 });
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <span>Boilerplate!</span>
        <button onClick={goToTourStart}>Start the Tour!</button>
        <button onClick={() => returnToLastSlide()}>Return</button>
      </div>
      <div className="background"></div>
    </div>
  );
}
