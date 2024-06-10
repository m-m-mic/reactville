import { MouseEventHandler, ReactNode } from "react";
import "./RvExpandingButton.styles.css";

interface RvExpandingButtonProps {
  onClick?: MouseEventHandler;
  label?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  small?: boolean;
}

export default function RvExpandingButton({
  onClick,
  disabled = false,
  label,
  iconLeft,
  iconRight,
  small = false,
}: RvExpandingButtonProps) {
  const getMainClasses = () => {
    return `rv-expanding-button${disabled ? " disabled" : ""}${small ? " small" : ""}`;
  };

  return (
    <button className={getMainClasses()} disabled={disabled} onClick={onClick}>
      {iconLeft && <div className="icon-wrapper left">{iconLeft}</div>}
      <div className="label">{label}</div>
      {iconRight && <div className="icon-wrapper right">{iconRight}</div>}
    </button>
  );
}
