import { FolderStructure } from "@/shared/types/folder-structure.type";

export const initialFolderStructure: FolderStructure = {
  public: {
    type: "folder",
    name: "public",
    content: {
      bconfig: {
        type: "file",
        name: "browserconfig.xml",
      },
      favicon: {
        type: "file",
        name: "favicon.ico",
      },
      manifest: {
        type: "file",
        name: "manifest.json",
      },
      robots: {
        type: "file",
        name: "robots.txt",
      },
    },
  },
  src: {
    type: "folder",
    name: "src",
    open: true,
    content: {
      assets: {
        type: "folder",
        name: "assets",
        content: {
          font: {
            type: "file",
            name: "example-font.woff2",
          },
          testO: {
            type: "file",
            name: "testFile",
            hidden: true,
          },
        },
      },
      appCss: {
        type: "file",
        name: "App.css",
      },
      appJsx: {
        type: "file",
        name: "App.jsx",
      },
      indexCss: {
        type: "file",
        name: "index.css",
      },
      mainJsx: {
        type: "file",
        name: "main.jsx",
      },
    },
  },
  config: {
    type: "file",
    name: "example-config.json",
  },
  index: {
    type: "file",
    name: "index.html",
  },
  package: {
    type: "file",
    name: "package.json",
  },
  readme: {
    type: "file",
    name: "README.md",
  },
};
