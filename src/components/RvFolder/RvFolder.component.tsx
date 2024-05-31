import "./RvFolder.styles.css";
import { ReactNode, useContext, useEffect, useState } from "react";
import { setValuesInStructure } from "@/shared/functions/setStructureFolderValue";
import { FolderStructureContext } from "@/context/providers/FolderStructureContext.provider";

interface RvFolderProps {
  name: string;
  children?: ReactNode[] | ReactNode;
  highlighted?: boolean;
  open?: boolean;
  hidden?: boolean;
  keyPath: string[];
}

export default function RvFolder({ keyPath, name, children, highlighted = false, open = false, hidden = false }: RvFolderProps) {
  const [childrenHeight, setChildrenHeight] = useState(0);

  const { folderStructure, setFolderStructure } = useContext(FolderStructureContext);

  const childHeight = 1.8;

  const getVisibleChildCount = (children: ReactNode[]) => {
    let childCount = 0;

    for (const child of children) {
      if (child?.props.hidden) {
        continue;
      } else if (child?.props.open) {
        childCount += 1 + getVisibleChildCount(child.props.children);
      } else {
        childCount += 1;
      }
    }
    return childCount;
  };

  useEffect(() => {
    if (!children) {
      setChildrenHeight(0);
    } else if (children instanceof Array) {
      setChildrenHeight(childHeight * getVisibleChildCount(children));
    } else {
      setChildrenHeight(childHeight);
    }
  }, [children]);

  const changeOpenState = () => {
    const updatedStructure = setValuesInStructure(folderStructure, [keyPath], { open: !open });
    setFolderStructure(updatedStructure);
  };

  return (
    <div className={`rv-folder ${hidden ? "hidden" : ""} ${highlighted ? "highlighted" : ""}`}>
      <button className="folder-name" onClick={changeOpenState}>
        {open ? "-" : "+"} {name}
      </button>
      <div style={{ height: `${childrenHeight}cqw` }} className={`contents ${open ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}
