import { SlideId, SlideProps } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";

export default function BoilerPlateSlide({ slideStack, setNextSlide, returnToLastSlide }: SlideProps) {
  const SLIDE_ID = SlideId.Boilerplate;

  const goToTourStart = () => {
    setNextSlide({ id: SlideId.TourStart, variant: 0 });
  };

  return (
    <div className={`slide ${SLIDE_ID} ${getSlideState(SLIDE_ID, slideStack)}`}>
      <div className="foreground">
        <span>Boilerplate!</span>
        <button onClick={goToTourStart}>Start the Tour!</button>
        <button onClick={() => returnToLastSlide()}>Return</button>
      </div>
      <div className="background">
        <div className="level-1"></div>
        <div className="level-2"></div>
        <div className="level-3"></div>
      </div>
    </div>
  );
}
