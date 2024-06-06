import { FileFolder, FolderStructure } from "@/shared/types/folder-structure.type";

export function setValuesInStructure(structure: FolderStructure, keyPaths: string[][], value: Partial<FileFolder>) {
  const internalFolderStructure = { ...structure };

  for (const keyPath of keyPaths) {
    const internalKeyPath: string[] = ([] as string[]).concat(...keyPath.map((key) => [key, "content"])).slice(0, -1);

    // eslint-disable-next-line
    // @ts-ignore
    internalKeyPath.reduce((folder, currentKey, i) => {
      if (currentKey === "content") {
        return folder[currentKey];
      }
      if (value.open === true) {
        folder[currentKey] = { ...folder[currentKey], open: true };
      }

      if (value.hidden === false) {
        folder[currentKey] = { ...folder[currentKey], hidden: false };
      }
      if (i === internalKeyPath.length - 1) {
        folder[currentKey] = { ...folder[currentKey], ...value };
      }
      return folder[currentKey];
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
