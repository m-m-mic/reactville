import RvExpandingButton from "@/components/RvExpandingButton/RvExpandingButton.component";
import { useContext } from "react";
import { SlideContext } from "@/context/providers/SlideProvider";
import ExploreIcon from "@/assets/icons/explore_icon.svg?react";

import "./RvSlideHeader.styles.css";

export default function RvSlideHeader({ title, showExploreButton = true }: { title: string; showExploreButton?: boolean }) {
  const { enterExploreMode } = useContext(SlideContext);
  return (
    <div className="rv-slide-header">
      <h1>{title}</h1>
      {showExploreButton && (
        <RvExpandingButton small={true} label="Explore" onClick={enterExploreMode} iconLeft={<ExploreIcon />} />
      )}
    </div>
  );
}
