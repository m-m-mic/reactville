import {SlideId, SlideProps} from "../../shared/types/slide.type.ts";
import {getSlideState} from "../../shared/functions/getSlideState.ts";
import "./LandingSlide.styles.css"

export default function LandingSlide({slideStack, setNextSlide}: SlideProps) {
    const SLIDE_ID = SlideId.Landing

    const goToBoilerplateSlide = () => {
        setNextSlide({id: SlideId.Boilerplate, variant: 0})
    }

    const goToQuickSelectSlide = () => {
        setNextSlide({id: SlideId.QuickSelect, variant: 0})
    }

    return (
        <div className={`slide ${SLIDE_ID} ${getSlideState(SLIDE_ID, slideStack)}`}>
            <div className="foreground">
                <span>Landing!</span>
                <button onClick={goToBoilerplateSlide}>Let's go!</button>
                <button onClick={goToQuickSelectSlide}>Quick Select</button>
            </div>
            <div className="background">
                <div className="level-3">
                </div>
                <div className="level-2">
                </div>
                <div className="level-1">
                </div>
            </div>
        </div>
    )
}