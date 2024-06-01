import { FileFolder, FolderStructure } from "@/shared/types/folder-structure.type";

export function setValuesInStructure(structure: FolderStructure, keyPaths: string[][], value: Partial<FileFolder>) {
  const internalFolderStructure = { ...structure };

  // TODO: remove ts-ignores
  for (const keyPath of keyPaths) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const internalKeyPath: string[] = [].concat(...keyPath.map((key) => [key, "content"])).slice(0, -1);

    // eslint-disable-next-line
    internalKeyPath.reduce((folder: any, key, i) => {
      if (key === "content") {
        return folder[key];
      }
      if (value.open === true) {
        folder[key] = { ...folder[key], open: true };
      }

      if (value.hidden === false) {
        folder[key] = { ...folder[key], hidden: false };
      }
      if (i === internalKeyPath.length - 1) {
        folder[key] = { ...folder[key], ...value };
      }
      return folder[key];
    }, internalFolderStructure);
  }
  return internalFolderStructure;
}

export function modifyOpenOfAllFolders(structure: FolderStructure, open: boolean) {
  const internalFolderStructure = { ...structure };

  const modifyInternalFolders = (folderStructure: FolderStructure) => {
    Object.values(folderStructure).forEach((subFile) => {
      if (subFile.type === "folder" && subFile.content) {
        subFile.open = open;
        modifyInternalFolders(subFile.content);
      }
    });
  };

  modifyInternalFolders(internalFolderStructure);

  return internalFolderStructure;
}

export function removeHighlightFromAllFiles(structure: FolderStructure) {
  const internalFolderStructure = { ...structure };

  const removeInternalHighlights = (folderStructure: FolderStructure) => {
    Object.values(folderStructure).forEach((subFile) => {
      subFile.highlighted = false;
      if (subFile.type === "folder" && subFile.content) {
        removeInternalHighlights(subFile.content);
      }
    });
  };

  removeInternalHighlights(internalFolderStructure);

  return internalFolderStructure;
}

export function closeAllFoldersAndRemoveHighlighting(structure: FolderStructure) {
  let internalFolderStructure = { ...structure };
  internalFolderStructure = modifyOpenOfAllFolders(internalFolderStructure, false);
  internalFolderStructure = removeHighlightFromAllFiles(internalFolderStructure);

  return internalFolderStructure;
}
