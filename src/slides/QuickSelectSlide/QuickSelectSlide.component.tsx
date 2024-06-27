import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { setNextSlide } from "@/shared/functions/setSlide";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./QuickSelectSlide.styles.css";
import { SlideContext } from "@/context/providers/SlideProvider";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import QuickSelectBackground from "./QuickSelectSlide.background.svg?react";
import RvToggle from "@/components/RvToggle/RvToggle.component";
import { Choices } from "@/shared/types/choices.type";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";

const INITIAL_INTERNAL_CHOICES: Choices = {
  [Slide.TourPages]: false,
  [Slide.TourComponents]: false,
  [Slide.TourStyles]: false,
  [Slide.TourStore]: false,
  [Slide.TourRequests]: false,
  [Slide.TourShared]: true,
};

export default function QuickSelectSlide() {
  const SLIDE_ID = Slide.QuickSelect;

  const { slideStack, setSlideStack } = useContext(SlideContext);
  const { updateChoices } = useContext(ChoicesContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();
  const [choicesSelection, setChoicesSelection] = useState(structuredClone(INITIAL_INTERNAL_CHOICES));

  useEffect(() => {
    if (slideStack[slideStack.length - 1] === Slide.Landing) {
      setChoicesSelection(structuredClone(INITIAL_INTERNAL_CHOICES));
    }

    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToResult = () => {
    updateChoices(choicesSelection);
    setNextSlide(Slide.Result, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  const setTourPagesChoice = (value: boolean) => {
    let stylesChoice = choicesSelection[Slide.TourStyles];
    if (value && choicesSelection[Slide.TourStyles] !== undefined) {
      stylesChoice = undefined;
    }

    if (value === false && choicesSelection[Slide.TourComponents] === false) {
      stylesChoice = false;
    }

    setChoicesSelection({ ...choicesSelection, [Slide.TourPages]: value, [Slide.TourStyles]: stylesChoice });
  };

  const setTourComponentsChoice = (value: boolean) => {
    let stylesChoice = choicesSelection[Slide.TourStyles];
    if (value && choicesSelection[Slide.TourStyles] !== undefined) {
      stylesChoice = undefined;
    }

    if (value === false && choicesSelection[Slide.TourPages] === false) {
      stylesChoice = false;
    }

    setChoicesSelection({ ...choicesSelection, [Slide.TourComponents]: value, [Slide.TourStyles]: stylesChoice });
  };

  const setTourStylesChoice = (value: boolean) => {
    setChoicesSelection({ ...choicesSelection, [Slide.TourStyles]: value });
  };

  const setTourStoreChoice = (value: boolean) => {
    setChoicesSelection({ ...choicesSelection, [Slide.TourStore]: value });
  };

  const setTourRequestsChoice = (value: boolean) => {
    setChoicesSelection({ ...choicesSelection, [Slide.TourRequests]: value });
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="foreground-wrapper">
          <div className="slide-explanation">
            <RvSlideHeader title={getSlideTitle(SLIDE_ID)} />
            <div className="choice-selection">
              <div className="toggle-container">
                <h3>How many pages?</h3>
                <RvToggle
                  currentState={choicesSelection[Slide.TourPages]}
                  onChange={setTourPagesChoice}
                  trueLabel="Many"
                  falseLabel="Just one"
                />
              </div>

              <div className="toggle-container">
                <h3>How many components?</h3>
                <RvToggle
                  currentState={choicesSelection[Slide.TourComponents]}
                  onChange={setTourComponentsChoice}
                  trueLabel="A few"
                  falseLabel="A lot"
                />
              </div>
              <div className="toggle-container">
                <h3>How much styling?</h3>
                <RvToggle
                  disabled={choicesSelection[Slide.TourPages] || choicesSelection[Slide.TourComponents]}
                  currentState={choicesSelection[Slide.TourStyles]}
                  onChange={setTourStylesChoice}
                  trueLabel="Plenty"
                  falseLabel="Very little"
                />
              </div>
              <div className="toggle-container">
                <h3>Need a store?</h3>
                <RvToggle
                  currentState={choicesSelection[Slide.TourStore]}
                  onChange={setTourStoreChoice}
                  trueLabel="Yes"
                  falseLabel="No"
                />
              </div>
              <div className="toggle-container">
                <h3>How many API requests?</h3>
                <RvToggle
                  currentState={choicesSelection[Slide.TourRequests]}
                  onChange={setTourRequestsChoice}
                  trueLabel="Loads"
                  falseLabel="Not a ton"
                />
              </div>
              <div className="shared-disclaimer">
                We will also add a 'shared' folder for anything that doesn't neatly fit into the your folder structure, like
                objects used by multiple components.
              </div>
            </div>
            <div className="action-buttons">
              <RvButton onClick={goToResult} label="I'm good to go!" />
            </div>
          </div>
        </div>
      </div>
      <QuickSelectBackground className="background" />
    </div>
  );
}
