import { FolderStructure } from "@/shared/types/folder-structure.type";
import { Choices } from "@/shared/types/choices.type";
import { closeAllFoldersAndRemoveHighlighting, setValuesInStructure } from "@/shared/functions/setStructureFolderValue";
import { Slide } from "@/shared/types/slide.type";

export function updateChoicesAndFolderStructure(
  folderStructure: FolderStructure,
  choices: Choices,
  choicesToUpdate: Partial<Choices>,
) {
  let updatedChoices = { ...choices };
  let updatedFolderStructure = closeAllFoldersAndRemoveHighlighting({ ...folderStructure });

  const updateChoiceKeys = Object.keys(choicesToUpdate);
  const updateChoiceValues = Object.values(choicesToUpdate);

  updateChoiceValues.forEach((value, index) => {
    switch (updateChoiceKeys[index]) {
      case Slide.TourPages:
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "pages"]], {
          hidden: !value,
          open: value,
          highlighted: value,
        });

        if (value === false) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src"]], {
            open: true,
          });
        }

        break;
      case Slide.TourComponents:
        if (value === true) {
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components"],
              ["src", "components", "exampleComponentA"],
              ["src", "components", "exampleComponentB"],
              ["src", "components", "exampleComponentC"],
            ],
            { hidden: false },
          );
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "components"]], {
            open: true,
            highlighted: true,
          });
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponentA.css"],
              ["src", "components", "exampleComponentA.jsx"],
              ["src", "components", "exampleComponentA.spec.jsx"],
              ["src", "components", "exampleComponentB.css"],
              ["src", "components", "exampleComponentB.jsx"],
              ["src", "components", "exampleComponentB.spec.jsx"],
            ],
            { hidden: true },
          );

          if (updatedChoices[Slide.TourPages]) {
            updatedFolderStructure = setValuesInStructure(
              updatedFolderStructure,
              [
                ["src", "pages"],
                ["src", "pages", "examplePage1"],
                ["src", "pages", "examplePage2"],
                ["src", "pages", "examplePage3"],
              ],
              { hidden: false },
            );
            updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "pages"]], {
              open: true,
              highlighted: true,
            });
            updatedFolderStructure = setValuesInStructure(
              updatedFolderStructure,
              [
                ["src", "pages", "examplePage1.css"],
                ["src", "pages", "examplePage1.jsx"],
                ["src", "pages", "examplePage1.spec.jsx"],
                ["src", "pages", "examplePage2.css"],
                ["src", "pages", "examplePage2.jsx"],
                ["src", "pages", "examplePage2.spec.jsx"],
              ],
              { hidden: true },
            );
          }
        } else if (value === false) {
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponentA"],
              ["src", "components", "exampleComponentB"],
              ["src", "components", "exampleComponentC"],
              ["src", "components", "exampleComponentA.css"],
              ["src", "components", "exampleComponentB.css"],
            ],
            { hidden: true },
          );
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponentA.jsx"],
              ["src", "components", "exampleComponentA.spec.jsx"],
              ["src", "components", "exampleComponentB.jsx"],
              ["src", "components", "exampleComponentB.spec.jsx"],
            ],
            { hidden: false },
          );
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "components"]], {
            open: true,
            highlighted: true,
          });

          if (updatedChoices[Slide.TourPages]) {
            updatedFolderStructure = setValuesInStructure(
              updatedFolderStructure,
              [
                ["src", "pages", "examplePage1"],
                ["src", "pages", "examplePage2"],
                ["src", "pages", "examplePage3"],
              ],
              { hidden: true },
            );
            updatedFolderStructure = setValuesInStructure(
              updatedFolderStructure,
              [
                ["src", "pages", "examplePage1.css"],
                ["src", "pages", "examplePage1.jsx"],
                ["src", "pages", "examplePage1.spec.jsx"],
                ["src", "pages", "examplePage2.css"],
                ["src", "pages", "examplePage2.jsx"],
                ["src", "pages", "examplePage2.spec.jsx"],
                ["src", "components", "exampleComponentA.css"],
                ["src", "components", "exampleComponentB.css"],
              ],
              { hidden: false },
            );

            updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "pages"]], {
              open: true,
              highlighted: true,
            });
          }
        } else if (value === undefined) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "components"]], { hidden: true });
          if (updatedChoices[Slide.TourPages]) {
            updatedFolderStructure = setValuesInStructure(
              updatedFolderStructure,
              [
                ["src", "pages"],
                ["src", "pages", "examplePage1"],
                ["src", "pages", "examplePage2"],
                ["src", "pages", "examplePage3"],
              ],
              { hidden: true },
            );
            updatedFolderStructure = setValuesInStructure(
              updatedFolderStructure,
              [
                ["src", "pages", "examplePage1.css"],
                ["src", "pages", "examplePage1.jsx"],
                ["src", "pages", "examplePage1.spec.jsx"],
                ["src", "pages", "examplePage2.css"],
                ["src", "pages", "examplePage2.jsx"],
                ["src", "pages", "examplePage2.spec.jsx"],
              ],
              { hidden: false },
            );
            break;
          }
        }
        break;
      case Slide.TourStyles:
        if (value === true) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "components"]], {
            open: true,
          });
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponentA.css"],
              ["src", "components", "exampleComponentB.css"],
            ],
            { hidden: false, highlighted: true },
          );
        } else if (value === false) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "styles"]], {
            hidden: false,
            open: true,
            highlighted: true,
          });
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "App.css"],
              ["src", "index.css"],
            ],
            { hidden: true },
          );
        } else if (value === undefined) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "styles"]], {
            hidden: true,
          });
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponentA.css"],
              ["src", "components", "exampleComponentB.css"],
            ],
            { hidden: true },
          );
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "App.css"],
              ["src", "index.css"],
            ],
            { hidden: false },
          );
        }
        break;
      case Slide.TourStore:
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "store"]], {
          hidden: !value,
          open: value,
          highlighted: value,
        });
        break;
      case Slide.TourRequests:
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "api"]], {
          hidden: !value,
          open: value,
          highlighted: value,
        });
        break;
      case Slide.TourShared:
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "shared"]], {
          hidden: !value,
          open: value,
          highlighted: value,
        });
        break;
    }
    updatedChoices = { ...updatedChoices, [updateChoiceKeys[index]]: value };
  });

  return { updatedFolderStructure, updatedChoices };
}
