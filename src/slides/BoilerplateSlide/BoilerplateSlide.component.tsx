import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { setNextSlide } from "@/shared/functions/setSlide";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import {
  closeAllFoldersAndRemoveHighlighting,
  modifyOpenOfAllFolders,
  setValuesInStructure,
} from "@/shared/functions/setStructureFolderValue";
import { SlideStackContext } from "@/context/SlideStackContext.provider";
import { FolderStructureContext } from "@/context/FolderStructureContext.provider";

export default function BoilerplateSlide() {
  const SLIDE_ID = Slide.Boilerplate;

  const { slideStack, setSlideStack } = useContext(SlideStackContext);
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
    const updatedStructure = setValuesInStructure(folderStructure, [["public"]], { open: true, highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const step2 = () => {
    let updatedStructure = setValuesInStructure(folderStructure, [["public"]], { open: false, highlighted: false });
    updatedStructure = setValuesInStructure(updatedStructure, [["src"]], { open: true, highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const step3 = () => {
    let updatedStructure = setValuesInStructure(folderStructure, [["src"]], { open: false, highlighted: false });
    updatedStructure = setValuesInStructure(
      updatedStructure,
      [["example-config.json"], ["index.html"], ["package.json"], ["README.md"]],
      { highlighted: true },
    );
    setFolderStructure(updatedStructure);
  };

  const cleanUp = () => {
    const updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);
    setFolderStructure(updatedStructure);
  };

  const showPagesFolder = () => {
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);

    updatedStructure = setValuesInStructure(
      updatedStructure,
      [
        ["src", "pages", "examplePage1.jsx"],
        ["src", "pages", "examplePage2.jsx"],
        ["src", "pages", "examplePage3.jsx"],
      ],
      {
        hidden: false,
        open: true,
        highlighted: true,
      },
    );

    updatedStructure = setValuesInStructure(
      updatedStructure,
      [
        ["src", "pages", "examplePage1"],
        ["src", "pages", "examplePage2"],
        ["src", "pages", "examplePage3"],
      ],
      {
        hidden: true,
        open: false,
        highlighted: false,
      },
    );

    setFolderStructure(updatedStructure);
  };

  const replace = () => {
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);

    updatedStructure = setValuesInStructure(
      updatedStructure,
      [
        ["src", "pages", "examplePage1.jsx"],
        ["src", "pages", "examplePage2.jsx"],
        ["src", "pages", "examplePage3.jsx"],
      ],
      {
        hidden: true,
        open: false,
        highlighted: false,
      },
    );

    updatedStructure = setValuesInStructure(
      updatedStructure,
      [
        ["src", "pages", "examplePage1"],
        ["src", "pages", "examplePage2"],
        ["src", "pages", "examplePage3"],
      ],
      {
        hidden: false,
        open: true,
        highlighted: true,
      },
    );

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
              <RvButton onClick={replace} label="Replace pages folder!" />
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
