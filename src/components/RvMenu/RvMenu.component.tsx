import { RvButton } from "@/components/RvButton/RvButton.component";
import { INITIAL_STACK, StackContext } from "@/context";
import { useContext, useEffect, useState } from "react";

import "./RvMenu.styles.css";
import { Slide } from "@/shared/types/slide.type";

export default function RvMenu() {
  const [landingVisibilityClass, setLandingVisibilityClass] = useState<"visible" | "hidden">("hidden");

  const { slideStack, setSlideStack } = useContext(StackContext);

  useEffect(() => {
    updateLandingVisibilityClass();
  }, [slideStack]);

  const updateLandingVisibilityClass = () => {
    if (slideStack[slideStack.length - 1] === Slide.Landing) {
      setLandingVisibilityClass("hidden");
    } else {
      setLandingVisibilityClass("visible");
    }
  };

  const returnToStart = () => {
    setSlideStack(INITIAL_STACK);
  };

  return (
    <div className="rv-menu">
      <span className={`start-button ${landingVisibilityClass}`}>
        <RvButton label="Back to start" onClick={returnToStart} />
      </span>
      <span className="fullscreen-button">
        <RvButton label="Fullscreen" />
      </span>
    </div>
  );
}
