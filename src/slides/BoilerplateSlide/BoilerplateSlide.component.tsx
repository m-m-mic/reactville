import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { setNextSlide } from "@/shared/functions/setSlide";
import { FolderContext, StackContext } from "@/context";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { modifyOpenOfAllFolders, setFolderValueInStructure } from "@/shared/functions/setStructureFolderValue";

export default function BoilerplateSlide() {
  const SLIDE_ID = Slide.Boilerplate;

  const { slideStack, setSlideStack } = useContext(StackContext);

  const { folder, setFolder } = useContext(FolderContext);

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

  const highlight = () => {
    const updatedStructure = setFolderValueInStructure(folder, ["public", "content", "favicon"], { highlighted: true });
    setFolder(updatedStructure);
  };

  const open = () => {
    const updatedStructure = modifyOpenOfAllFolders(folder, true);
    setFolder(updatedStructure);
  };

  const close = () => {
    const updatedStructure = modifyOpenOfAllFolders(folder, false);
    setFolder(updatedStructure);
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="slide-explanation">
          <h1 className="slide-title">Boilerplate</h1>
          <div className="text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="action-buttons">
            <RvButton onClick={highlight} label="Highlight!" />
            <RvButton onClick={close} label="Close!" />
            <RvButton onClick={open} label="Open!" />
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
