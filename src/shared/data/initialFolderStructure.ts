import { FolderStructure } from "@/shared/types/folder-structure.type";

export const INITIAL_FOLDER_STRUCTURE: FolderStructure = {
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
    content: {
      assets: {
        type: "folder",
        name: "assets",
        content: {
          font: {
            type: "file",
            name: "example-font.woff2",
          },
        },
      },
      pages: {
        type: "folder",
        hidden: true,
        name: "pages",
        content: {
          examplePage1: {
            type: "file",
            name: "examplePage1.jsx",
          },
          examplePage2: {
            type: "file",
            name: "examplePage2.jsx",
          },
          examplePage3: {
            type: "file",
            name: "examplePage3.jsx",
          },
          examplePage1Folder: {
            type: "file",
            hidden: true,
            name: "examplePage1",
            content: {
              examplePage1Css: {
                type: "file",
                name: "examplePage1.css",
              },
              examplePage1jsx: {
                type: "file",
                name: "examplePage1.jsx",
              },
              examplePage1SpecJsx: {
                type: "file",
                name: "examplePage1.spec.jsx",
              },
            },
          },
          examplePage2Folder: {
            type: "file",
            hidden: true,
            name: "examplePage2",
            content: {
              examplePage1Css: {
                type: "file",
                name: "examplePage2.css",
              },
              examplePage1jsx: {
                type: "file",
                name: "examplePage2.jsx",
              },
              examplePage1SpecJsx: {
                type: "file",
                name: "examplePage2.spec.jsx",
              },
            },
          },
          examplePage3Folder: {
            type: "file",
            hidden: true,
            name: "examplePage3",
            content: {
              examplePage1Css: {
                type: "file",
                name: "examplePage3.css",
              },
              examplePage1jsx: {
                type: "file",
                name: "examplePage3.jsx",
              },
              examplePage1SpecJsx: {
                type: "file",
                name: "examplePage3.spec.jsx",
              },
            },
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
  "example-config.json": {
    type: "file",
    name: "example-config.json",
  },
  "index.html": {
    type: "file",
    name: "index.html",
  },
  "package.json": {
    type: "file",
    name: "package.json",
  },
  "README.md": {
    type: "file",
    name: "README.md",
  },
};
