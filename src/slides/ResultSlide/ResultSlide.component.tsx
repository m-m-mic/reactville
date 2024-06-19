import { Slide, SlideState } from "@/shared/types/slide.type";
import { useContext, useEffect, useState } from "react";
import { getSlideState } from "@/shared/functions/getSlideState";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import "./ResultSlide.styles.css";
import { SlideContext } from "@/context/providers/SlideProvider";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import { getResultName } from "@/shared/functions/getResultName";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { FolderStructureContext } from "@/context/providers/FolderStructureContext.provider";
import { modifyOpenOfAllFolders } from "@/shared/functions/setStructureFolderValue";

export default function ResultSlide() {
  const SLIDE_ID = Slide.Result;

  const { slideStack } = useContext(SlideContext);
  const { choices } = useContext(ChoicesContext);
  const { folderStructure, setFolderStructure } = useContext(FolderStructureContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  const openAllFolders = () => {
    setFolderStructure(modifyOpenOfAllFolders(folderStructure, true));
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground" onTransitionEnd={openAllFolders}>
        <div className="slide-explanation">
          <RvSlideHeader title={`${getSlideTitle(SLIDE_ID)} - ${getResultName(choices)}`} />
          <div className="text-body">Lorem ipsum und so bla bla bla....</div>
          <div className="action-buttons"></div>
        </div>
        <div className="folder-structure-wrapper">
          <RvFolderStructure />
        </div>
      </div>
    </div>
  );
}
