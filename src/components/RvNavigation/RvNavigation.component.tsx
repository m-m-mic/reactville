import "./RvNavigation.styles.css";
import { useContext, useEffect, useState } from "react";
import { SlideStackContext } from "@/context/providers/SlideStackContext.provider";
import { SetDocumentTitle } from "@/shared/functions/setDocumentTitle";
import { Slide } from "@/shared/types/slide.type";
import { ModalContext } from "@/context/providers/ModalContext.provider";

export default function RvNavigation() {
  const [visibilityClass, setVisibilityClass] = useState<"visible" | "hidden">("hidden");

  const { slideStack } = useContext(SlideStackContext);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    updateLandingVisibilityClass();
  }, [slideStack]);

  SetDocumentTitle();

  const updateLandingVisibilityClass = () => {
    if (slideStack.includes(Slide.TourPages)) {
      setVisibilityClass("visible");
    } else {
      setVisibilityClass("hidden");
    }
  };

  const isButtonVisible = (slideId: Slide) => {
    if (slideStack.includes(slideId)) {
      return "visible";
    } else {
      return "hidden";
    }
  };

  return (
    <div className={`rv-navigation ${visibilityClass}`}>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourPages)} tourPages-button`}
        onClick={() => openModal(Slide.TourPages)}></button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourComponents)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourComponents)} tourComponents-button`}
        onClick={() => openModal(Slide.TourComponents)}></button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourStyles)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourStyles)} tourStyles-button`}
        onClick={() => openModal(Slide.TourStyles)}></button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourStore)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourStore)} tourStore-button`}
        onClick={() => openModal(Slide.TourStore)}></button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourRequests)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourRequests)} tourRequests-button`}
        onClick={() => openModal(Slide.TourRequests)}></button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourShared)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourShared)} tourShared-button`}
        onClick={() => openModal(Slide.TourShared)}></button>
    </div>
  );
}
