import { FileFolder, FolderStructure } from "@/shared/types/folder-structure.type";

export function setFolderValue(folder: FolderStructure, keyPath: string[], value: Partial<FileFolder>) {
  keyPath.reduce((folder: any, key, i) => {
    if (i === keyPath.length - 1) {
      folder[key] = { ...folder[key], ...value };
    }
    return folder[key];
  }, folder);
}
