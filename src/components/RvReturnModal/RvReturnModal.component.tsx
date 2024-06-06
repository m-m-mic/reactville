import { useContext } from "react";
import { ModalContext } from "@/context/providers/ModalContext.provider";
import { RvButton } from "@/components/RvButton/RvButton.component";
import "./RvReturnModal.styles.css";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";
import { Slide } from "@/shared/types/slide.type";

export default function RvReturnModal() {
  const { modalProps, closeModal } = useContext(ModalContext);
  const { slideStack, setSlideStack } = useContext(SlideStackContext);

  const returnToSlide = () => {
    // TODO: Resolve choices
    const internalSlideStack = [...slideStack];
    const slideIndex = internalSlideStack.indexOf(modalProps.returnTo);
    internalSlideStack.length = slideIndex + 1;
    setSlideStack(internalSlideStack);
    closeModal();
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
