import { createContext, ReactNode, useState } from "react";
import { INITIAL_CHOICES, INITIAL_CHOICES_STACK } from "@/context/initial.context";

export const ChoicesContext = createContext(INITIAL_CHOICES_STACK);

export default function ChoicesContextProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState(structuredClone(INITIAL_CHOICES));

  return <ChoicesContext.Provider value={{ choices, setChoices }}>{children}</ChoicesContext.Provider>;
}
