import React, { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "@/context/providers/ModalContext.provider";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./RvReturnModal.styles.css";
import { SlideContext } from "@/context/providers/SlideProvider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { Slide } from "@/shared/types/slide.type";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import { INITIAL_CHOICES, INITIAL_SLIDE_STACK } from "@/context/initial.context";

export default function RvReturnModal() {
  const [previousFocusedElement, setPreviousFocusedElement] = useState<HTMLElement | null>(null);

  const { modalProps, closeModal } = useContext(ModalContext);
  const { slideStack, setSlideStack } = useContext(SlideContext);
  const { updateChoices } = useContext(ChoicesContext);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalProps.open && modalRef.current) {
      // Sets last active element into state and then blurs it
      const activeElement = document.activeElement as HTMLElement | null;
      setPreviousFocusedElement(activeElement);
      activeElement?.blur();

      const modalElement = modalRef.current;
      const focusableElements: NodeListOf<HTMLElement> = modalElement.querySelectorAll("button");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (!modalRef.current?.contains(document.activeElement)) {
            // If document has no active element we focus one of the modal elements to trap the focus
            event.preventDefault();
            if (event.shiftKey) {
              lastElement.focus();
            } else {
              firstElement.focus();
            }
          } else if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeModalAndRefocus();
        }
      };

      document.addEventListener("keydown", handleTabKeyPress as () => void);
      document.addEventListener("keydown", handleEscapeKeyPress as () => void);

      return () => {
        document.removeEventListener("keydown", handleTabKeyPress as () => void);
        document.removeEventListener("keydown", handleEscapeKeyPress as () => void);
      };
    }
  }, [modalProps]);

  const returnToSlide = () => {
    closeModal();

    if (modalProps.returnTo === Slide.Landing) {
      setSlideStack(INITIAL_SLIDE_STACK);
      updateChoices(structuredClone(INITIAL_CHOICES));
      return;
    }

    const internalSlideStack = [...slideStack];
    const slideIndex = internalSlideStack.indexOf(modalProps.returnTo);

    const slidesToReset = [...internalSlideStack.slice(slideIndex)];
    const choicesToReset: { [id: string]: boolean | undefined } = {};
    slidesToReset.forEach((slide: string) => (choicesToReset[slide] = undefined));
    updateChoices(choicesToReset);

    internalSlideStack.length = slideIndex + 1;
    setSlideStack(internalSlideStack);
  };

  const closeModalAndRefocus = () => {
    closeModal();
    // We return the focus to the element the user had focused before opening the modal
    previousFocusedElement?.focus();
  };

  const getModalMessage = () => {
    return (
      <>
        Are you sure you want to return to {getSlideTitle(modalProps.returnTo)}?
        {modalProps.returnTo !== Slide.Landing ? (
          <b>Your progress since then will be undone.</b>
        ) : (
          <b>Your entire progress will be undone.</b>
        )}
      </>
    );
  };

  return (
    <>
      <div className={`rv-return-modal ${modalProps.open ? "open" : "closed"}`} ref={modalRef}>
        <h2 className="modal-title">Return to {getSlideTitle(modalProps.returnTo)}</h2>
        <div className="modal-message">{getModalMessage()}</div>
        <div className="modal-buttons">
          <RvButton onClick={returnToSlide} label={modalProps.confirmText} />
          <RvButton onClick={closeModalAndRefocus} label={modalProps.dismissText} />
        </div>
      </div>
      <div className={`rv-return-modal-backdrop ${modalProps.open ? "open" : "closed"}`} onClick={closeModalAndRefocus}></div>
    </>
  );
}
