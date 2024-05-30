import { FolderStructure } from "@/shared/types/folder-structure.type";

export const INITIAL_FOLDER_STRUCTURE: FolderStructure = {
  public: {
    type: "folder",
    name: "public",
    content: {
      "browserconfig.xml": {
        type: "file",
        name: "browserconfig.xml",
      },
      "favicon.ico": {
        type: "file",
        name: "favicon.ico",
      },
      "manifest.json": {
        type: "file",
        name: "manifest.json",
      },
      "robots.txt": {
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
          "example-font.woff2": {
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
          "examplePage1.jsx": {
            type: "file",
            name: "examplePage1.jsx",
          },
          "examplePage2.jsx": {
            type: "file",
            name: "examplePage2.jsx",
          },
          "examplePage3.jsx": {
            type: "file",
            name: "examplePage3.jsx",
          },
          examplePage1: {
            type: "folder",
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
          examplePage2: {
            type: "folder",
            hidden: true,
            name: "examplePage2",
            content: {
              "examplePage2.css": {
                type: "file",
                name: "examplePage2.css",
              },
              "examplePage2.jsx": {
                type: "file",
                name: "examplePage2.jsx",
              },
              "examplePage2.spec.jsx": {
                type: "file",
                name: "examplePage2.spec.jsx",
              },
            },
          },
          examplePage3: {
            type: "folder",
            hidden: true,
            name: "examplePage3",
            content: {
              "examplePage3.css": {
                type: "file",
                name: "examplePage3.css",
              },
              "examplePage3.jsx": {
                type: "file",
                name: "examplePage3.jsx",
              },
              "examplePage3.spec.jsx": {
                type: "file",
                name: "examplePage3.spec.jsx",
              },
            },
          },
        },
      },
      "App.css": {
        type: "file",
        name: "App.css",
      },
      "App.jsx": {
        type: "file",
        name: "App.jsx",
      },
      "index.css": {
        type: "file",
        name: "index.css",
      },
      "main.jsx": {
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
