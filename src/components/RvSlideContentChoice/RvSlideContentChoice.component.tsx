import { ReactNode } from "react";
import "./RvSlideContentChoice.style.css";

interface RvSlideContentChoiceProps {
  choice: undefined | boolean;
  undefinedChoice: ReactNode;
  falseChoice: ReactNode;
  trueChoice: ReactNode;
}

export default function RvSlideContentChoice({ choice, undefinedChoice, falseChoice, trueChoice }: RvSlideContentChoiceProps) {
  return (
    <div className="slide-content">
      <div className={`slide-choice ${choice === undefined ? "" : "hidden"}`}>{undefinedChoice}</div>
      <div className={`slide-choice ${choice === false ? "" : "hidden"}`}>{falseChoice}</div>
      <div className={`slide-choice ${choice === true ? "" : "hidden"}`}>{trueChoice}</div>
    </div>
  );
}
