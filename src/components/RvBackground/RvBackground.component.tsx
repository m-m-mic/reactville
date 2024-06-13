import RvCityBackground from "./RvCityBackground.svg?react";
import "./RvBackground.style.css";
import { useContext, useEffect, useState } from "react";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { Slide } from "@/shared/types/slide.type";

export default function RvBackground() {
  const { slideStack } = useContext(SlideStackContext);
  const [cityLadderState, setCityLadderState] = useState<"out-of-frame" | "middle-section" | "bottom-section" | "hidden">(
    "out-of-frame",
  );
  const [cityBackgroundState, setCityBackgroundState] = useState<"out-of-frame" | "in-frame" | "hidden">("out-of-frame");
  const [cityMountainsState, setCityMountainsState] = useState<"visible" | "hidden">("hidden");

  useEffect(() => {
    setCityLadder();
    setCityBackground();
    setCityMountains();
  }, [slideStack]);

  // City-ladder: Ändert sich in Landing (state: out of frame below), Explanation (state: in screen), Boilerplate (state: in screen, bottom of ladder), rest (fade out)
  // city-background: landing, explanation: out of frame | boilerplate-tourShared: in frame | result: fade?
  // city-mountains: result: fade-in | everything else: fade-out
  // city-sky: changes color based on current slide

  const getCitySkyClass = () => {
    return `city-sky ${slideStack[slideStack.length - 1]}`;
  };

  const setCityLadder = () => {
    const currentSlide = slideStack[slideStack.length - 1];

    if (currentSlide === Slide.Landing) {
      setCityLadderState("out-of-frame");
    } else if (currentSlide === Slide.Explanation) {
      setCityLadderState("middle-section");
    } else if (currentSlide === Slide.Boilerplate) {
      setCityLadderState("bottom-section");
    } else {
      setCityLadderState("hidden");
    }
  };

  const setCityBackground = () => {
    const currentSlide = slideStack[slideStack.length - 1];

    if (currentSlide === Slide.Landing || currentSlide === Slide.Explanation) {
      setCityBackgroundState("out-of-frame");
    } else if (currentSlide === Slide.Result) {
      setCityBackgroundState("hidden");
    } else {
      setCityBackgroundState("in-frame");
    }
  };

  const setCityMountains = () => {
    const currentSlide = slideStack[slideStack.length - 1];

    if (currentSlide === Slide.Result) {
      setCityMountainsState("visible");
    } else {
      setCityBackgroundState("hidden");
    }
  };

  return (
    <>
      <div className={`city-ladder ${cityLadderState}`}></div>
      <RvCityBackground className={`city-background ${cityBackgroundState}`} />
      <div className={`city-mountains ${cityMountainsState}`}></div>
      <div className={getCitySkyClass()}></div>
    </>
  );
}
