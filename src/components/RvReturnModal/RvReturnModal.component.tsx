import { useContext } from "react";
import { ModalContext } from "@/context/providers/ModalContext.provider";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./RvReturnModal.styles.css";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { Slide } from "@/shared/types/slide.type";
import { ChoicesContext } from "@/context/providers/ChoicesContext.provider";
import { INITIAL_CHOICES, INITIAL_SLIDE_STACK } from "@/context/initial.context";

export default function RvReturnModal() {
  const { modalProps, closeModal } = useContext(ModalContext);
  const { slideStack, setSlideStack } = useContext(SlideStackContext);
  const { updateChoices } = useContext(ChoicesContext);

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

  const getModalMessage = () => {
    return (
      <>
        Are you sure you want to return to {getSlideTitle(modalProps.returnTo)}?
        {modalProps.returnTo !== Slide.Landing ? (
          <b>Your progress up to that point will be undone.</b>
        ) : (
          <b>Your entire progress will be undone.</b>
        )}
      </>
    );
  };

  return (
    <>
      <div className={`rv-return-modal ${modalProps.open ? "open" : "closed"}`}>
        <h2 className="modal-title">Return to {getSlideTitle(modalProps.returnTo)}</h2>
        <div className="modal-message">{getModalMessage()}</div>
        <div className="modal-buttons">
          <RvButton onClick={returnToSlide} label={modalProps.confirmText} />
          <RvButton onClick={closeModal} label={modalProps.dismissText} />
        </div>
      </div>
      <div className={`rv-return-modal-backdrop ${modalProps.open ? "open" : "closed"}`} onClick={closeModal}></div>
    </>
  );
}
