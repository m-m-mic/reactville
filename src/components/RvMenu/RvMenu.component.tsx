import { RvButton } from "@/components/RvButton/RvButton.component";
import { INITIAL_CHOICES, INITIAL_SLIDE_STACK } from "@/context/initial.context";
import { useContext, useEffect, useState } from "react";

import "./RvMenu.styles.css";
import { Slide } from "@/shared/types/slide.type";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { FolderStructureContext } from "@/context/providers/FolderStructureContext.provider";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";

export default function RvMenu() {
  const [landingVisibilityClass, setLandingVisibilityClass] = useState<"visible" | "hidden">("hidden");

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { setFolderStructure } = useContext(FolderStructureContext);
  const { setChoices } = useContext(ChoicesContext);

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
    setSlideStack(INITIAL_SLIDE_STACK);
    setFolderStructure(structuredClone(INITIAL_FOLDER_STRUCTURE));
    setChoices(structuredClone(INITIAL_CHOICES));
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
