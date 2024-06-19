import { createContext, ReactNode, useEffect, useState } from "react";
import { INITIAL_MODAL, INITIAL_MODAL_CONTEXT } from "@/context/initial.context";
import { Slide } from "@/shared/types/slide.type";
import { IS_IN_DEV_MODE } from "@/main";

export const ModalContext = createContext(INITIAL_MODAL_CONTEXT);

export default function ModalContextProvider({ children }: { children: ReactNode }) {
  const [modalProps, setModalProps] = useState(structuredClone(INITIAL_MODAL));

  useEffect(() => {
    if (IS_IN_DEV_MODE) console.debug("[ModalContext]", modalProps);
  }, [modalProps]);

  const openModal = (returnTo: Slide, dismissText = "No, stay", confirmText = "Yes, return") => {
    setModalProps({ returnTo, dismissText, confirmText, open: true });
  };

  const closeModal = () => {
    setModalProps({ ...modalProps, open: false });
  };

  return <ModalContext.Provider value={{ modalProps, openModal, closeModal }}>{children}</ModalContext.Provider>;
}
