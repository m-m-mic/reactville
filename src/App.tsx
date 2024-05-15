import { useState } from "react";

import "./App.css";
import "./shared/styles/slide.css";
import { Slide, SlideId } from "@/shared/types/slide.type";
import LandingSlide from "@/components/LandingSlide/LandingSlide.component";
import BoilerplateSlide from "@/components/BoilerplateSlide/BoilerplateSlide.component";
import { GetOrientation } from "@/shared/functions/getOrientation";

export default function App() {
  const [slideStack, setSlideStack] = useState<Slide[]>([{ id: SlideId.Landing, variant: 0 }]);

  const getAspectRatioClass = () => {
    return GetOrientation();
  };

  const setNextSlide = (slide: Slide) => {
    setSlideStack([...slideStack, slide]);
  };

  const returnToLastSlide = () => {
    const tempStack = [...slideStack];
    tempStack.splice(-1);
    setSlideStack(tempStack);
  };

  return (
    <div className={`view-container ${getAspectRatioClass()}`}>
      <LandingSlide slideStack={slideStack} setNextSlide={setNextSlide} returnToLastSlide={returnToLastSlide} />
      <BoilerplateSlide slideStack={slideStack} setNextSlide={setNextSlide} returnToLastSlide={returnToLastSlide} />
    </div>
  );
}
