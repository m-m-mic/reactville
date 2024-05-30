import { FileFolder, FolderStructure } from "@/shared/types/folder-structure.type";

export function setValuesInStructure(structure: FolderStructure, keyPaths: string[][], value: Partial<FileFolder>) {
  const internalFolderStructure = { ...structure };

  for (const keyPath of keyPaths) {
    const internalKeyPath: string[] = [].concat(...keyPath.map((key) => [key, "content"])).slice(0, -1);

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
