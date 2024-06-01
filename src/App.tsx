import "./App.css";
import "./shared/styles/slide.css";
import { GetOrientation } from "@/shared/functions/getOrientation";

import SlideStackContextProvider from "@/context/providers/SlideStackContext.provider";
import FolderStructureContextProvider from "@/context/providers/FolderStructureContext.provider";
import ChoicesContextProvider from "@/context/providers/ChoicesContext.provider";

import LandingSlide from "@/slides/LandingSlide/LandingSlide.component";
import BoilerplateSlide from "@/slides/BoilerplateSlide/BoilerplateSlide.component";
import TourPagesSlide from "@/slides/TourPagesSlide/TourPagesSlide.component";
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
import RvBackground from "@/components/RvBackground/RvBackground.component";

export default function App() {
  const getAspectRatioClass = () => {
    return GetOrientation();
  };

  return (
    <SlideStackContextProvider>
      <FolderStructureContextProvider>
        <ChoicesContextProvider>
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
            <RvBackground />
          </div>
        </ChoicesContextProvider>
      </FolderStructureContextProvider>
    </SlideStackContextProvider>
  );
}
