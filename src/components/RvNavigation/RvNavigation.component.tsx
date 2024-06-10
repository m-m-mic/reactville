import "./RvNavigation.styles.css";
import { useContext } from "react";
import { SlideContext } from "@/context/providers/SlideProvider";
import { SetDocumentTitle } from "@/shared/functions/setDocumentTitle";
import { Slide } from "@/shared/types/slide.type";
import { ModalContext } from "@/context/providers/ModalContext.provider";
import { getSlideTitle } from "@/shared/functions/getSlideTitle";

export default function RvNavigation() {
  const { slideStack, isInExploreMode } = useContext(SlideContext);
  const { openModal } = useContext(ModalContext);

  SetDocumentTitle();

  const isButtonVisible = (slideId: Slide) => {
    if (slideStack.includes(slideId)) {
      return "visible";
    } else {
      return "hidden";
    }
  };

  const openReturnModal = (slide: Slide) => {
    if (slide !== slideStack[slideStack.length - 1]) {
      openModal(slide);
    }
  };

  return (
    <div className={`rv-navigation ${isInExploreMode ? "exploration" : ""}`}>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourPages)} tourPages-button`}
        onClick={() => openReturnModal(Slide.TourPages)}>
        <div className="nav-tooltip">{getSlideTitle(Slide.TourPages)}</div>
      </button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourComponents)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourComponents)} tourComponents-button`}
        onClick={() => openReturnModal(Slide.TourComponents)}>
        <div className="nav-tooltip">{getSlideTitle(Slide.TourComponents)}</div>
      </button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourStyles)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourStyles)} tourStyles-button`}
        onClick={() => openReturnModal(Slide.TourStyles)}>
        <div className="nav-tooltip">{getSlideTitle(Slide.TourStyles)}</div>
      </button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourStore)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourStore)} tourStore-button`}
        onClick={() => openReturnModal(Slide.TourStore)}>
        <div className="nav-tooltip">{getSlideTitle(Slide.TourStore)}</div>
      </button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourRequests)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourRequests)} tourRequests-button`}
        onClick={() => openReturnModal(Slide.TourRequests)}>
        <div className="nav-tooltip">{getSlideTitle(Slide.TourRequests)}</div>
      </button>
      <div className={`nav-divider ${isButtonVisible(Slide.TourShared)}`}></div>
      <button
        className={`rv-navigation-button ${isButtonVisible(Slide.TourShared)} tourShared-button`}
        onClick={() => openReturnModal(Slide.TourShared)}>
        <div className="nav-tooltip">{getSlideTitle(Slide.TourShared)}</div>
      </button>
    </div>
  );
}
