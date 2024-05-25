import { MouseEventHandler, ReactNode } from "react";
import "./RvButton.styles.css";

interface RvButtonProps {
  onClick?: MouseEventHandler;
  label?: string;
  title?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function RvButton({ onClick, disabled = false, label, title, iconLeft, iconRight }: RvButtonProps) {
  return (
    <button className={`rv-button ${disabled ? "disabled" : ""}`} disabled={disabled} title={title} onClick={onClick}>
      {iconLeft && (
        <div className="icon-wrapper" data-testid="icon-left">
          {iconLeft}
        </div>
      )}
      {label}
      {iconRight && (
        <div className="icon-wrapper" data-testid="icon-right">
          {iconRight}
        </div>
      )}
    </button>
  );
}
