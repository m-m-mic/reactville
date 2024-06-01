import { FileFolder, FolderStructure } from "@/shared/types/folder-structure.type";

const api: FileFolder = {
  type: "folder",
  name: "api",
  hidden: true,
  content: {
    "exampleApiCall1.js": {
      type: "file",
      name: "exampleApiCall1.js",
    },
    "exampleApiCall2.js": {
      type: "file",
      name: "exampleApiCall2.js",
    },
    "exampleApiCall3.js": {
      type: "file",
      name: "exampleApiCall3.js",
    },
  },
};

const pages: FileFolder = {
  type: "folder",
  hidden: true,
  name: "pages",
  content: {
    "examplePage1.css": {
      type: "file",
      name: "examplePage1.css",
    },
    "examplePage1.jsx": {
      type: "file",
      name: "examplePage1.jsx",
    },
    "examplePage1.spec.jsx": {
      type: "file",
      name: "examplePage1.spec.jsx",
    },
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
    examplePage1: {
      type: "folder",
      hidden: true,
      name: "examplePage1",
      content: {
        "examplePage1.css": {
          type: "file",
          name: "examplePage1.css",
        },
        "examplePage1.jsx": {
          type: "file",
          name: "examplePage1.jsx",
        },
        "examplePage1.spec.jsx": {
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
};

const components: FileFolder = {
  type: "folder",
  name: "components",
  hidden: true,
  content: {
    "exampleComponent1.css": {
      hidden: true,
      type: "file",
      name: "exampleComponent1.css",
    },
    "exampleComponent1.jsx": {
      type: "file",
      name: "exampleComponent1.jsx",
    },
    "exampleComponent1.spec.jsx": {
      type: "file",
      name: "exampleComponent1.spec.jsx",
    },
    "exampleComponent2.css": {
      hidden: true,
      type: "file",
      name: "exampleComponent2.css",
    },
    "exampleComponent2.jsx": {
      type: "file",
      name: "exampleComponent2.jsx",
    },
    "exampleComponent2.spec.jsx": {
      type: "file",
      name: "exampleComponent2.spec.jsx",
    },
    exampleComponent1: {
      type: "folder",
      name: "exampleComponent1",
      content: {
        "exampleComponent1.css": {
          type: "file",
          name: "exampleComponent1.css",
        },
        "exampleComponent1.jsx": {
          type: "file",
          name: "exampleComponent1.jsx",
        },
        "exampleComponent1.spec.jsx": {
          type: "file",
          name: "exampleComponent1.spec.jsx",
        },
      },
    },
    exampleComponent2: {
      type: "folder",
      name: "exampleComponent2",
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
    exampleComponent3: {
      type: "folder",
      name: "exampleComponent3",
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
};

const store: FileFolder = {
  type: "folder",
  name: "store",
  hidden: true,
  content: {
    slices: {
      type: "folder",
      name: "slices",
      content: {
        "exampleSlice.js": {
          type: "file",
          name: "exampleSlice.js",
        },
        "selectors.js": {
          type: "file",
          name: "selectors.js",
        },
      },
    },
    "reducer.js": {
      type: "file",
      name: "reducer.js",
    },
    "store.js": {
      type: "file",
      name: "store.js",
    },
  },
};

const styles: FileFolder = {
  type: "folder",
  name: "styles",
  hidden: true,
  content: {
    "App.css": {
      type: "file",
      name: "App.css",
    },
    "index.css": {
      type: "file",
      name: "index.css",
    },
    "exampleStyle.css": {
      type: "file",
      name: "exampleStyle.css",
    },
  },
};

const shared: FileFolder = {
  type: "folder",
  name: "shared",
  hidden: true,
  content: {
    data: {
      type: "folder",
      name: "data",
      content: {
        "exampleData1.js": {
          type: "file",
          name: "exampleData1.js",
        },
        "exampleData2.js": {
          type: "file",
          name: "exampleData2.js",
        },
      },
    },
    functions: {
      type: "folder",
      name: "functions",
      content: {
        "exampleFunction1.js": {
          type: "file",
          name: "exampleFunction1.js",
        },
        "exampleFunction2.js": {
          type: "file",
          name: "exampleFunction2.js",
        },
      },
    },
  },
};

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
      api,
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
      components,
      pages,
      shared,
      store,
      styles,
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
