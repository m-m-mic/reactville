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
              ["src", "components", "exampleComponent1"],
              ["src", "components", "exampleComponent2"],
              ["src", "components", "exampleComponent3"],
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
              ["src", "components", "exampleComponent1.css"],
              ["src", "components", "exampleComponent1.jsx"],
              ["src", "components", "exampleComponent1.spec.jsx"],
              ["src", "components", "exampleComponent2.css"],
              ["src", "components", "exampleComponent2.jsx"],
              ["src", "components", "exampleComponent2.spec.jsx"],
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
              ["src", "components", "exampleComponent1"],
              ["src", "components", "exampleComponent2"],
              ["src", "components", "exampleComponent3"],
              ["src", "components", "exampleComponent1.css"],
              ["src", "components", "exampleComponent2.css"],
            ],
            { hidden: true },
          );
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponent1.jsx"],
              ["src", "components", "exampleComponent1.spec.jsx"],
              ["src", "components", "exampleComponent2.jsx"],
              ["src", "components", "exampleComponent2.spec.jsx"],
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
                ["src", "components", "exampleComponent1.css"],
                ["src", "components", "exampleComponent2.css"],
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
              ["src", "components", "exampleComponent1.css"],
              ["src", "components", "exampleComponent2.css"],
            ],
            { hidden: false, highlighted: true },
          );
        } else if (value === false) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "styles"]], {
            hidden: false,
            open: true,
            highlighted: true,
          });
        } else if (value === undefined) {
          updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "styles"]], {
            hidden: true,
          });
          updatedFolderStructure = setValuesInStructure(
            updatedFolderStructure,
            [
              ["src", "components", "exampleComponent1.css"],
              ["src", "components", "exampleComponent2.css"],
            ],
            { hidden: true },
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
