import "./RvNavigation.styles.css";
import { useContext, useEffect, useState } from "react";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { SetDocumentTitle } from "@/shared/functions/setDocumentTitle";

export default function RvNavigation() {
  const [visibilityClass, setVisibilityClass] = useState<"visible" | "hidden">("hidden");

  const { slideStack } = useContext(SlideStackContext);

  useEffect(() => {
    updateLandingVisibilityClass();
  }, [slideStack]);

  SetDocumentTitle();

  const updateLandingVisibilityClass = () => {
    if (slideStack[slideStack.length - 1].startsWith("tour")) {
      setVisibilityClass("visible");
    } else {
      setVisibilityClass("hidden");
    }
  };

  return <div className={`rv-navigation ${visibilityClass}`}>Nav here</div>;
}
