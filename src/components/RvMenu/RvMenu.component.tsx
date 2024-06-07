import { KeyboardEvent, useContext, useEffect, useState } from "react";

import "./RvMenu.styles.css";
import { Slide } from "@/shared/types/slide.type";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import RvMenuButton from "@/components/RvMenuButton/RvMenuButton.component";

import FullscreenIcon from "@/assets/icons/fullscreen_icon.svg?react";
import FullscreenExitIcon from "@/assets/icons/fullscreen-exit_icon.svg?react";
import HomeIcon from "@/assets/icons/home_icon.svg?react";
import RvTooltip from "@/components/RvTooltip/RvTooltip.component";
import { ModalContext } from "@/context/providers/ModalContext.provider";

export default function RvMenu() {
  const [landingVisibilityClass, setLandingVisibilityClass] = useState<"visible" | "hidden">("hidden");
  const [isInFullscreen, setIsInFullscreen] = useState<boolean | undefined>();
  const [isFullscreenTooltipVisible, setIsFullscreenTooltipVisible] = useState(false);
  const { slideStack } = useContext(SlideStackContext);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    document.addEventListener("fullscreenchange", onFullscreen);
    document.addEventListener("keydown", onF11Keydown);

    if (slideStack[slideStack.length - 1] === Slide.Landing) {
      setIsFullscreenTooltipVisible(true);
      new Promise((res) => setTimeout(res, 10000)).then(() => setIsFullscreenTooltipVisible(false));
    }

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      document.removeEventListener("keydown", onF11Keydown);
    };
  }, []);

  const onFullscreen = () => {
    document.fullscreenElement ? setIsInFullscreen(true) : setIsInFullscreen(false);
  };

  const onF11Keydown = (ev: Event) => {
    if ((ev as unknown as KeyboardEvent).key === "F11") {
      ev.preventDefault();
      toggleFullScreen();
    }
  };

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
    openModal(Slide.Landing);
  };

  const toggleFullScreen = () => {
    setIsFullscreenTooltipVisible(false);
    if (isInFullscreen) {
      document.exitFullscreen();
    } else {
      document.getElementsByTagName("html")[0].requestFullscreen();
    }
  };

  return (
    <div className="rv-menu">
      <span className={`start-button ${landingVisibilityClass}`}>
        <RvMenuButton label="Return to start" onClick={returnToStart} iconRight={<HomeIcon />} />
      </span>
      <span className="fullscreen-button">
        <RvTooltip content={"Enter Fullscreen for the best Experience!"} isVisible={isFullscreenTooltipVisible} onHover={false}>
          <RvMenuButton
            label={isInFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            iconRight={isInFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            onClick={toggleFullScreen}
          />
        </RvTooltip>
      </span>
    </div>
  );
}
