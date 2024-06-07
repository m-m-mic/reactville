import { createContext, ReactNode, useEffect, useState } from "react";
import { INITIAL_SLIDE_STACK, INITIAL_SLIDE_STACK_CONTEXT } from "@/context/initial.context";
import { IS_IN_DEV_MODE } from "@/main";

export const SlideStackContext = createContext(INITIAL_SLIDE_STACK_CONTEXT);

export default function SlideStackContextProvider({ children }: { children: ReactNode }) {
  const [slideStack, setSlideStack] = useState(INITIAL_SLIDE_STACK);

  useEffect(() => {
    if (IS_IN_DEV_MODE) console.debug("[SlideStackContext]", slideStack);
  }, [slideStack]);

  return <SlideStackContext.Provider value={{ slideStack, setSlideStack }}>{children}</SlideStackContext.Provider>;
}
