import { createContext, ReactNode, useEffect, useState } from "react";
import { INITIAL_SLIDE_STACK, INITIAL_SLIDE_CONTEXT } from "@/context/initial.context";
import { IS_IN_DEV_MODE } from "@/main";

export const SlideContext = createContext(INITIAL_SLIDE_CONTEXT);

export default function SlideProvider({ children }: { children: ReactNode }) {
  const [slideStack, setSlideStack] = useState(INITIAL_SLIDE_STACK);
  const [isInExploreMode, setIsInExploreMode] = useState(false);

  useEffect(() => {
    if (IS_IN_DEV_MODE) console.debug("[SlideContext]", slideStack);
  }, [slideStack]);

  useEffect(() => {
    if (isInExploreMode) {
      // Gives current active slide "exploration" as class to hide it
      const currentSlide = document.getElementsByClassName(`slide present`)[0];
      if (currentSlide) {
        currentSlide.classList.add("exploration");
      }
    } else {
      const currentSlide = document.getElementsByClassName(`slide present`)[0];
      if (currentSlide) {
        // Removes exploration class from current active slide
        currentSlide.classList.remove("exploration");
      }
    }
  }, [isInExploreMode]);

  const enterExploreMode = () => {
    setIsInExploreMode(true);
  };

  const exitExploreMode = () => {
    setIsInExploreMode(false);
  };

  return (
    <SlideContext.Provider value={{ slideStack, setSlideStack, isInExploreMode, enterExploreMode, exitExploreMode }}>
      {children}
    </SlideContext.Provider>
  );
}
