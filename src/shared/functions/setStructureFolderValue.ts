import { FileFolder, FolderStructure } from "@/shared/types/folder-structure.type";

export function setFolderValueInStructure(structure: FolderStructure, keyPath: string[], value: Partial<FileFolder>) {
  const internalFolderStructure = { ...structure };
  keyPath.reduce((folder: any, key, i) => {
    if (i === keyPath.length - 1) {
      folder[key] = { ...folder[key], ...value };
    }
    return folder[key];
  }, internalFolderStructure);

  return internalFolderStructure;
}

export function modifyOpenOfAllFolders(structure: FolderStructure, open: boolean) {
  const internalFolderStructure = { ...structure };

  const collapseInternalFolders = (folderStructure: FolderStructure) => {
    Object.values(folderStructure).forEach((subFile) => {
      if (subFile.type === "folder" && subFile.content) {
        subFile.open = open;
        collapseInternalFolders(subFile.content);
      }
    });
  };

  collapseInternalFolders(internalFolderStructure);

  return internalFolderStructure;
}

export function removeHighlightFromAllFiles(structure: FolderStructure) {
  const internalFolderStructure = { ...structure };

  const collapseInternalFolders = (folderStructure: FolderStructure) => {
    Object.values(folderStructure).forEach((subFile) => {
      if (subFile.type === "folder" && subFile.content) {
        subFile.highlighted = false;
        collapseInternalFolders(subFile.content);
      }
    });
  };

  collapseInternalFolders(internalFolderStructure);

  return internalFolderStructure;
}

export function closeAllFoldersAndRemoveHighlighting(structure: FolderStructure) {
  let internalFolderStructure = { ...structure };
  internalFolderStructure = modifyOpenOfAllFolders(internalFolderStructure, false);
  internalFolderStructure = removeHighlightFromAllFiles(internalFolderStructure);

  return internalFolderStructure;
}
