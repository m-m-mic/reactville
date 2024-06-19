import { Slide, SlideState } from "@/shared/types/slide.type";
import { getSlideState } from "@/shared/functions/getSlideState";
import "./BoilerplateSlide.styles.css";
import { useContext, useEffect, useState } from "react";
import { RvButton } from "@/components/RvButton/RvButton.component";
import { isRemovedFromViewport } from "@/shared/functions/isRemovedFromViewport";
import { setNextSlide } from "@/shared/functions/setSlide";
import RvFolderStructure from "@/components/RvFolderStructure/RvFolderStructure.component";
import { closeAllFoldersAndRemoveHighlighting, setValuesInStructure } from "@/shared/functions/setStructureFolderValue";
import { SlideContext } from "@/context/providers/SlideProvider";
import { FolderStructureContext } from "@/context/providers/FolderStructureContext.provider";
import RvSlideHeader from "@/components/RvSlideHeader/RvSlideHeader.component";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";

export default function BoilerplateSlide() {
  const SLIDE_ID = Slide.Boilerplate;

  const [boilerplateStep, setBoilerplateStep] = useState(0);

  const { slideStack, setSlideStack } = useContext(SlideContext);
  const { folderStructure, setFolderStructure } = useContext(FolderStructureContext);

  const [slideState, setSlideState] = useState<SlideState | undefined>();

  useEffect(() => {
    if (slideStack.length === 1) {
      setBoilerplateStep(0);
    }

    setSlideState(getSlideState(SLIDE_ID, slideStack));
  }, [slideStack]);

  if (isRemovedFromViewport(SLIDE_ID, slideStack)) {
    return null;
  }

  const goToStep1 = () => {
    setBoilerplateStep(1);
  };

  const goToStep2 = () => {
    setBoilerplateStep(2);
    const updatedStructure = setValuesInStructure(folderStructure, [["public"]], { open: true, highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const goToStep3 = () => {
    setBoilerplateStep(3);
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);
    updatedStructure = setValuesInStructure(updatedStructure, [["src", "assets"]], { open: true });
    updatedStructure = setValuesInStructure(updatedStructure, [["src"]], { highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const goToStep4 = () => {
    setBoilerplateStep(4);
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);
    updatedStructure = setValuesInStructure(updatedStructure, [["src", "assets"]], { open: true });
    updatedStructure = setValuesInStructure(updatedStructure, [["src", "App.spec.jsx"]], { highlighted: true });
    setFolderStructure(updatedStructure);
  };

  const goToStep5 = () => {
    setBoilerplateStep(5);
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);
    updatedStructure = setValuesInStructure(updatedStructure, [["src", "assets"]], { open: true });
    updatedStructure = setValuesInStructure(
      updatedStructure,
      [["example-config.json"], ["index.html"], ["package.json"], ["README.md"]],
      { highlighted: true },
    );
    setFolderStructure(updatedStructure);
  };

  const goToStep6 = () => {
    setBoilerplateStep(6);
    let updatedStructure = closeAllFoldersAndRemoveHighlighting(folderStructure);
    updatedStructure = setValuesInStructure(updatedStructure, [["src", "assets"]], { open: true });
    setFolderStructure(updatedStructure);
  };

  const goToTourPages = () => {
    setNextSlide(Slide.TourPages, slideStack, setSlideStack);
  };

  return (
    <div className={`slide ${SLIDE_ID} ${slideState}`}>
      <div className="foreground">
        <div className="boilerplate-foreground">
          <div className="slide-explanation">
            <RvSlideHeader title={getSlideTitle(SLIDE_ID)} showExploreButton={false} />
            <div className="boilerplate-slide-content">
              <div className={`boilerplate-step ${boilerplateStep === 0 ? "active" : ""}`}>
                <div className="text-body">
                  Before we get going you should first generate a <b>new React project</b>. There are multiple ways of doing this,
                  but all of them result in a very similar base structure which can be used for our Tour.
                  <div className="text-divider"></div>
                  If you’re unsure how to set up a project we recommend taking a look at{" "}
                  <a href="https://vitejs.dev/guide/" target="_blank" referrerPolicy="no-referrer">
                    Vite
                  </a>
                  .<div className="text-divider"></div>
                  Vite is a tool which lets you create and build web applications, though you won’t need to know about it in
                  detail to understand this tutorial.
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToStep1} label="Understood!" />
                </div>
              </div>
              <div className={`boilerplate-step step-1 ${boilerplateStep === 1 ? "active" : ""}`}>
                <div className="text-body">
                  After creating your React application you will end up with a folder structure that looks something like the one
                  you can see <b>on the right side</b>.<div className="text-divider"></div>
                  This is already quite a bit, so let’s break it down one by one before we start exploring <b>Reactville</b>.
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToStep2} label="Alright!" />
                </div>
              </div>
              <div className={`boilerplate-step ${boilerplateStep === 2 ? "active" : ""}`}>
                <div className="text-body">
                  The <b>‘public’ folder</b> includes public information of your application, such as the favicon or things like
                  site descriptions for search engines.
                  <div className="text-divider"></div>
                  They also often hold configuration files which can help search engines list your website in their search
                  results.
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToStep3} label="Okay!" />
                </div>
              </div>
              <div className={`boilerplate-step ${boilerplateStep === 3 ? "active" : ""}`}>
                <div className="text-body">
                  Next up is where the coding magic happens, the <b>‘src’ folder</b>.<div className="text-divider"></div>
                  For now there are only a couple of basic JavaScript and CSS files in here, but we will be adding quite a bit
                  more as we progress on our Tour.
                  <div className="text-divider"></div>The <b>‘assets’ sub-folder</b> holds internal styling and page elements,
                  such as fonts, icons, and images you may want to use within your application.
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToStep4} label="All clear!" />
                </div>
              </div>
              <div className={`boilerplate-step ${boilerplateStep === 4 ? "active" : ""}`}>
                <div className="text-body">
                  In the ‘src’ folder you can also find a <b>spec file</b>. These files are used for <b>unit tests</b>, small
                  tests that verify whether parts of your code work as you intended.
                  <div className="text-divider"></div>
                  Testing your code is an important part of building an application which is why we will be including them as
                  default in this tutorial. Though if you’re new to programming, feel free to omit these spec files from your
                  project for now.
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToStep5} label="Got it!" />
                </div>
              </div>
              <div className={`boilerplate-step ${boilerplateStep === 5 ? "active" : ""}`}>
                <div className="text-body">
                  Outside of any folders you are going to find a multitude of setup files and the <b>package.json</b>
                  <div className="text-divider"></div>
                  The package.json includes general project information like its name, a variety of executable scripts and the
                  list of packages the project requires to work. If you ever add a package to your project with npm the package
                  name and version will be listed here.
                  <div className="text-divider"></div>
                  Here you can also find a <b>readme.md</b> file, which should be used for project documentation. Documenting can
                  help both you and potential collaborators get a better understanding of how your project is structured and is
                  therefore <b>highly recommended</b>.
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToStep6} label="Aha!" />
                </div>
              </div>
              <div className={`boilerplate-step ${boilerplateStep === 6 ? "active" : ""}`}>
                <div className="text-body">
                  Alright, now that we’ve taken a closer look at our initial project structure we can start exploring{" "}
                  <b>Reactville</b>!
                </div>
                <div className="action-buttons">
                  <RvButton onClick={goToTourPages} label="Let's go!" />
                </div>
              </div>
            </div>
          </div>
          <div className={`folder-structure-wrapper ${boilerplateStep === 0 ? "hidden" : ""}`}>
            <RvFolderStructure />
          </div>
        </div>
      </div>
    </div>
  );
}
