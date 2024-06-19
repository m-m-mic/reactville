import { ReactNode, useContext } from "react";
import "./RvSlideContentChoice.style.css";
import { SlideContext } from "@/context/providers/SlideProvider";

interface RvSlideContentChoiceProps {
  slide: string;
  choice: undefined | boolean;
  undefinedChoice: ReactNode;
  falseChoice: ReactNode;
  trueChoice: ReactNode;
}

export default function RvSlideContentChoice({
  slide,
  choice,
  undefinedChoice,
  falseChoice,
  trueChoice,
}: RvSlideContentChoiceProps) {
  const { slideStack } = useContext(SlideContext);

  const getCurrentSlide = () => {
    return slideStack[slideStack.length - 1];
  };

  return (
    <div className={`slide-content ${getCurrentSlide() === slide ? "active" : ""}`}>
      <div className={`slide-choice ${getCurrentSlide() === slide && choice === undefined ? "active" : ""}`}>
        {undefinedChoice}
      </div>
      <div className={`slide-choice ${getCurrentSlide() === slide && choice === false ? "active" : ""}`}>{falseChoice}</div>
      <div className={`slide-choice ${getCurrentSlide() === slide && choice === true ? "active" : ""}`}>{trueChoice}</div>
    </div>
  );
}
