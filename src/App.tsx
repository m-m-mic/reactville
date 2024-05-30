import { useEffect, useState } from "react";

import "./App.css";
import "./shared/styles/slide.css";
import { GetOrientation } from "@/shared/functions/getOrientation";
import LandingSlide from "@/slides/LandingSlide/LandingSlide.component";
import BoilerplateSlide from "@/slides/BoilerplateSlide/BoilerplateSlide.component";
import TourPagesSlide from "@/slides/TourPagesSlide/TourPagesSlide.component";
import { INITIAL_CHOICES, INITIAL_STACK, ChoicesContext, StackContext, FolderStructureContext } from "@/context";
import ExplanationSlide from "@/slides/ExplanationSlide/ExplanationSlide.component";
import QuickSelectSlide from "@/slides/QuickSelectSlide/QuickSelectSlide.component";
import TourComponentsSlide from "@/slides/TourComponentsSlide/TourComponentsSlide.component";
import TourStylesSlide from "@/slides/TourStylesSlide/TourStylesSlide.component";
import TourStoreSlide from "@/slides/TourStoreSlide/TourStoreSlide.component";
import TourRequestsSlide from "@/slides/TourRequestsSlide/TourRequestsSlide.component";
import TourSharedSlide from "@/slides/TourSharedSlide/TourSharedSlide.component";
import ResultSlide from "@/slides/ResultSlide/ResultSlide.component";
import RvNavigation from "@/components/RvNavigation/RvNavigation.component";
import RvMenu from "@/components/RvMenu/RvMenu.component";
import { INITIAL_FOLDER_STRUCTURE } from "@/shared/data/initialFolderStructure";

export default function App() {
  const [slideStack, setSlideStack] = useState(INITIAL_STACK);
  const [choices, setChoices] = useState(INITIAL_CHOICES);
  const [folderStructure, setFolderStructure] = useState(INITIAL_FOLDER_STRUCTURE);

  const getAspectRatioClass = () => {
    return GetOrientation();
  };

  return (
    <ChoicesContext.Provider value={{ choices, setChoices }}>
      <StackContext.Provider value={{ slideStack, setSlideStack }}>
        <FolderStructureContext.Provider value={{ folderStructure, setFolderStructure }}>
          <div className={`view-container ${getAspectRatioClass()}`}>
            <RvMenu />
            <RvNavigation />

            <LandingSlide />
            <QuickSelectSlide />
            <ExplanationSlide />
            <BoilerplateSlide />
            <TourPagesSlide />
            <TourComponentsSlide />
            <TourStylesSlide />
            <TourStoreSlide />
            <TourRequestsSlide />
            <TourSharedSlide />
            <ResultSlide />
            <img className="city-background" src="/tourCityBackground.svg" alt="" />
          </div>
        </FolderStructureContext.Provider>
      </StackContext.Provider>
    </ChoicesContext.Provider>
  );
}
