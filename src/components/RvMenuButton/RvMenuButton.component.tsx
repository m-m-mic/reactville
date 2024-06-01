import { MouseEventHandler, ReactNode } from "react";
import "./RvMenuButton.styles.css";

interface RvMenuButtonProps {
  onClick?: MouseEventHandler;
  label?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export default function RvMenuButton({ onClick, disabled = false, label, iconLeft, iconRight }: RvMenuButtonProps) {
  return (
    <button className={`rv-menu-button ${disabled ? "disabled" : ""}`} disabled={disabled} onClick={onClick}>
      {iconLeft && <div className="icon-wrapper left">{iconLeft}</div>}
      <div className="label">{label}</div>
      {iconRight && <div className="icon-wrapper right">{iconRight}</div>}
    </button>
  );
}
