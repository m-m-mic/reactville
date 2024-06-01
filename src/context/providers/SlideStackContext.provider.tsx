import { createContext, ReactNode, useState } from "react";
import { INITIAL_SLIDE_STACK, INITIAL_SLIDE_STACK_CONTEXT } from "@/context/initial.context";

export const SlideStackContext = createContext(INITIAL_SLIDE_STACK_CONTEXT);

export default function SlideStackContextProvider({ children }: { children: ReactNode }) {
  const [slideStack, setSlideStack] = useState(INITIAL_SLIDE_STACK);

  return <SlideStackContext.Provider value={{ slideStack, setSlideStack }}>{children}</SlideStackContext.Provider>;
}
