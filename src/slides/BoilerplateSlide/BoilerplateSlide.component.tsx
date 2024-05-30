import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { setNextSlide } from "@/shared/functions/setSlide";
import { FolderStructureContext, StackContext } from "@/context";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import {
  closeAllFoldersAndRemoveHighlighting,
  modifyOpenOfAllFolders,
  setFolderValueInStructure,
} from "@/shared/functions/setStructureFolderValue";

export default function BoilerplateSlide() {
  const SLIDE_ID = Slide.Boilerplate;

  const { slideStack, setSlideStack } = useContext(StackContext);
  const { folderStructure, setFolderStructure } = useContext(FolderStructureContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  const goToTourStart = () => {
    setNextSlide(Slide.TourPages, slideStack, setSlideStack);
  };

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  const open = () => {
    const updatedStructure = modifyOpenOfAllFolders(folderStructure, true);
    setFolderStructure(updatedStructure);
  };

  const step1 = () => {
    const updatedStructure = setFolderValueInStructure(folderStructure, ["public"], { open: true, highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const step2 = () => {
    let updatedStructure = setFolderValueInStructure(folderStructure, ["public"], { open: false, highlighted: false });
    updatedStructure = setFolderValueInStructure(updatedStructure, ["src"], { open: true, highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const step3 = () => {
    let updatedStructure = setFolderValueInStructure(folderStructure, ["src"], { open: false, highlighted: false });
    updatedStructure = setFolderValueInStructure(updatedStructure, ["example-config.json"], { highlighted: true });
    updatedStructure = setFolderValueInStructure(updatedStructure, ["index.html"], { highlighted: true });
    updatedStructure = setFolderValueInStructure(updatedStructure, ["package.json"], { highlighted: true });
    updatedStructure = setFolderValueInStructure(updatedStructure, ["README.md"], { highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const cleanUp = () => {
    const updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);
    setFolderStructure(updatedStructure);
  };

  const showPagesFolder = () => {
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);

    updatedStructure = setFolderValueInStructure(updatedStructure, ["src", "pages"], {
      hidden: false,
      open: true,
      highlighted: true,
    });

    setFolderStructure(updatedStructure);
  };

  const replace = () => {
    const updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);

    setFolderStructure(updatedStructure);
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Boilerplate</h1>
          <div className="text-body">
            Lorem ipsum und so bla bla bla....
            <div className="action-buttons" style={{ flexFlow: "row wrap" }}>
              <RvButton onClick={step1} label="Step 1!" />
              <RvButton onClick={step2} label="Step 2!" />
              <RvButton onClick={step3} label="Step 3!" />
              <RvButton onClick={cleanUp} label="Clean up!" />
              <RvButton onClick={showPagesFolder} label="Show pages folder!" />
              <RvButton onClick={open} label="Replace pages folder!" />
            </div>
          </div>
          <div className="action-buttons">
            <RvButton onClick={goToTourStart} label="Start the tour!" />
          </div>
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
    </div>
  );
}
