import RvCityBackground from "./RvCityBackground.svg?react";
import RvCityLadder from "./RvCityLadder.svg?react";
import "./RvBackground.style.css";
import { useContext } from "react";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { Slide } from "@/shared/types/slide.type";

export default function RvBackground() {
  const { slideStack } = useContext(SlideStackContext);

  // City-ladder: Ändert sich in Landing (state: out of frame below), Explanation (state: in screen), Boilerplate (state: in screen, bottom of ladder), rest (fade out)
  // city-background: landing, explanation: out of frame | boilerplate-tourShared: in frame | result: fade?
  // city-mountains: result: fade-in | everything else: fade-out
  // city-sky: changes color based on current slide

  const getCitySkyClass = () => {
    return `city-sky ${slideStack[slideStack.length - 1]}`;
  };

  const getCityLadderClass = () => {
    const currentSlide = slideStack[slideStack.length - 1];
    if (currentSlide === Slide.Landing) {
      return "city-ladder out-of-frame";
    } else if (currentSlide === Slide.Explanation) {
      return "city-ladder middle-section";
    } else if (currentSlide === Slide.Boilerplate) {
      return "city-ladder bottom-section";
    } else {
      return "city-ladder hidden";
    }
  };

  const getCityBackgroundClass = () => {
    const currentSlide = slideStack[slideStack.length - 1];

    if (currentSlide === Slide.Landing || currentSlide === Slide.Explanation) {
      return `city-background ${currentSlide} out-of-frame`;
    } else if (currentSlide === Slide.Result) {
      return `city-background ${currentSlide} hidden`;
    } else {
      return `city-background ${currentSlide} in-frame`;
    }
  };

  const getCityMountainsClass = () => {
    const currentSlide = slideStack[slideStack.length - 1];

    if (currentSlide === Slide.Result) {
      return "city-mountains visible";
    } else {
      return "city-mountains hidden";
    }
  };

  return (
    <>
      <RvCityLadder className={getCityLadderClass()} />
      <RvCityBackground className={getCityBackgroundClass()} />
      <div className={getCityMountainsClass()}></div>
      <div className={getCitySkyClass()}></div>
    </>
  );
}
