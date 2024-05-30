import "./RvFile.styles.css";

interface RvFileProps {
  name: string;
  highlighted?: boolean;
  type?: string;
  hidden?: boolean;
}

export default function RvFile({ name, hidden = false, highlighted = false, type = "" }: RvFileProps) {
  return <div className={`rv-file  ${hidden ? "hidden" : ""}  ${highlighted ? "highlighted" : ""} ${type}`}>{name}</div>;
}
