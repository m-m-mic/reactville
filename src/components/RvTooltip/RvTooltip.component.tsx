import { ReactNode, useEffect, useRef, useState } from "react";
import "./RvTooltip.styles.css";

interface RvTooltipProps {
  children: ReactNode;
  isVisible?: boolean;
  content: ReactNode;
  onHover?: boolean;
}

export default function RvTooltip({ children, isVisible, onHover = true, content }: RvTooltipProps) {
  const [internalIsVisible, setInternalIsVisible] = useState(isVisible);

  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        closeTooltip();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tooltipRef]);

  useEffect(() => {
    setInternalIsVisible(isVisible);
  }, [isVisible]);

  const closeTooltip = () => {
    setInternalIsVisible(false);
  };

  return (
    <span ref={tooltipRef} className={`rv-tooltip-container ${onHover ? "hoverable" : ""}`}>
      {children}
      <div className={`rv-tooltip ${internalIsVisible ? "visible" : ""}`}>{content}</div>
    </span>
  );
}
