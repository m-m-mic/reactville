import "./RvFolderStructure.styles.css";
import RvFolder from "@/components/RvFolder/RvFolder.component";
import RvFile from "@/components/RvFile/RvFile.component";
import { FolderContext } from "@/context";
import { ReactNode, useState } from "react";
import { initialFolderStructure } from "@/shared/data/initialFolderStructure";
import { FolderStructure } from "@/shared/types/folder-structure.type";

export default function RvFolderStructure() {
  const [folder, setFolder] = useState(initialFolderStructure);

  const constructFilesFromStructure = (structure: FolderStructure, keyPath: string[] = []): ReactNode[] => {
    const files: ReactNode[] = [];

    const fileKeys = Object.keys(structure);

    Object.values(structure).forEach((subFile, index) => {
      if (subFile.type === "folder" && subFile.content) {
        files.push(
          <RvFolder
            keyPath={[...keyPath, fileKeys[index]]}
            key={fileKeys[index]}
            name={subFile.name}
            open={subFile.open}
            highlighted={subFile.highlighted}
            hidden={subFile.hidden}>
            {constructFilesFromStructure(subFile.content, [...keyPath, fileKeys[index], "content"])}
          </RvFolder>,
        );
      } else {
        files.push(
          <RvFile key={fileKeys[index]} name={subFile.name} hidden={subFile.hidden} highlighted={subFile.highlighted} />,
        );
      }
    });
    return files;
  };
  return (
    <FolderContext.Provider value={{ folder, setFolder }}>
      <div className="rv-folder-structure">{constructFilesFromStructure(folder)}</div>
    </FolderContext.Provider>
  );
}
