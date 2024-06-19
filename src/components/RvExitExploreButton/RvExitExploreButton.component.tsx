import { RvButton } from "@/components/RvButton/RvButton.component";
import { useContext } from "react";
import { SlideContext } from "@/context/providers/SlideProvider";
import "./RvExitExploreButton.styles.css";
import QuitExploreIcon from "@/assets/icons/quit-explore_icon.svg?react";

export default function RvExitExploreButton() {
  const { isInExploreMode, exitExploreMode } = useContext(SlideContext);

  return (
    <div className={`rv-exit-explore-button ${isInExploreMode ? "exploration" : ""}`}>
      <RvButton label="Stop Exploring" iconLeft={<QuitExploreIcon />} onClick={exitExploreMode} />
    </div>
  );
}
