import "./RvFolder.styles.css";
import { ReactNode, useContext, useEffect, useState } from "react";
import { FolderContext } from "@/context";
import { setFolderValueInStructure } from "@/shared/functions/setStructureFolderValue";

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

  const { folder, setFolder } = useContext(FolderContext);

  const childHeight = 1.5;

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
    const updatedStructure = setFolderValueInStructure(folder, keyPath, { open: !open });
    setFolder(updatedStructure);
  };

  return (
    <div className={`rv-folder ${hidden ? "hidden" : ""} ${highlighted ? "highlighted" : ""}`}>
      <button className="folder-name" onClick={changeOpenState}>
        + {name}
      </button>
      <div style={{ height: `${childrenHeight}cqw` }} className={`contents ${open ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}
