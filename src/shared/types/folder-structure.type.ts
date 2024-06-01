export type FolderStructure = { [id: string]: FileFolder };

export interface FileFolder {
  type: "folder" | "file";
  name: string;
  hidden?: boolean;
  highlighted?: boolean;
  open?: boolean;
  content?: { [id: string]: FileFolder };
}
