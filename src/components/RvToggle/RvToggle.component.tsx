import "./RvToggle.styles.css";

interface RvToggleProps {
  currentState: boolean | undefined;
  onChange: (value: boolean) => void;
  falseLabel?: string;
  trueLabel?: string;
  disabled?: boolean;
}

export default function RvToggle({
  currentState,
  onChange,
  falseLabel = "false",
  trueLabel = "true",
  disabled = false,
}: RvToggleProps) {
  return (
    <div className={`rv-toggle${disabled ? " disabled" : ""}`}>
      <button
        className={`rv-toggle-button false${currentState === false ? " active" : ""}`}
        onClick={() => onChange(false)}
        disabled={disabled}>
        {falseLabel}
      </button>
      <button
        className={`rv-toggle-button true${currentState === true ? " active" : ""}`}
        onClick={() => onChange(true)}
        disabled={disabled}>
        {trueLabel}
      </button>
      <div
        className={`rv-toggle-background${currentState === false ? " false" : ""}${currentState === true ? " true" : ""}`}></div>
    </div>
  );
}
