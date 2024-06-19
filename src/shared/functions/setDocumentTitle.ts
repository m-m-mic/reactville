import { useContext, useEffect } from "react";
import { SlideContext } from "@/context/providers/SlideProvider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { Slide } from "@/shared/types/slide.type";

const DOCUMENT_TITLE_APPENDIX = " • Reactville";

export function SetDocumentTitle() {
  const { slideStack } = useContext(SlideContext);

  useEffect(() => {
    if (slideStack[slideStack.length - 1] === Slide.Landing) {
      document.title = "Welcome to Reactville!";
    } else {
      document.title = getSlideTitle(slideStack[slideStack.length - 1]) + DOCUMENT_TITLE_APPENDIX;
    }
  }, [slideStack]);
}
