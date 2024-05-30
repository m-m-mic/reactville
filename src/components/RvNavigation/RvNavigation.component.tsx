import "./RvNavigation.styles.css";
import { useContext, useEffect, useState } from "react";
import { StackContext } from "@/context";

export default function RvNavigation() {
  const [visibilityClass, setVisibilityClass] = useState<"visible" | "hidden">("hidden");

  const { slideStack } = useContext(StackContext);

  useEffect(() => {
    updateLandingVisibilityClass();
  }, [slideStack]);

  const updateLandingVisibilityClass = () => {
    if (slideStack[slideStack.length - 1].startsWith("tour")) {
      setVisibilityClass("visible");
    } else {
      setVisibilityClass("hidden");
    }
  };

  return <div className={`rv-navigation ${visibilityClass}`}>Nav here</div>;
}
