import { useContext, useEffect } from "react";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { Slide } from "@/shared/types/slide.type";

const DOCUMENT_TITLE_APPENDIX = " • REACTVILLE";

export function SetDocumentTitle() {
  const { slideStack } = useContext(SlideStackContext);

  useEffect(() => {
    if (slideStack[slideStack.length - 1] === Slide.Landing) {
      document.title = "Welcome to REACTVILLE";
    } else {
      document.title = getSlideTitle(slideStack[slideStack.length - 1]) + DOCUMENT_TITLE_APPENDIX;
    }
  }, [slideStack]);
}
