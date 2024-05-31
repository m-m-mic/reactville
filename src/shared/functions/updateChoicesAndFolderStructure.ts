import { FolderStructure } from "@/shared/types/folder-structure.type";
import { Choices } from "@/shared/types/choices.type";
import { closeAllFoldersAndRemoveHighlighting, setValuesInStructure } from "@/shared/functions/setStructureFolderValue";

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
      case "pages":
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "pages"]], { hidden: !value });
        break;
      case "components":
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

          if (updatedChoices.pages) {
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
              ["src", "components"],
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

          if (updatedChoices.pages) {
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
                ["src", "components", "exampleComponent1.css"],
                ["src", "components", "exampleComponent2.css"],
              ],
              { hidden: false },
            );
          } else if (value === undefined) {
            updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "components"]], { hidden: true });
            if (updatedChoices.pages) {
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
        }
        break;
      case "styles":
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "styles"]], { hidden: !value });
        break;
      case "store":
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "store"]], { hidden: !value });
        break;
      case "requests":
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "api"]], { hidden: !value });
        break;
      case "shared":
        updatedFolderStructure = setValuesInStructure(updatedFolderStructure, [["src", "shared"]], { hidden: !value });
        break;
    }
    updatedChoices = { ...updatedChoices, [updateChoiceKeys[index]]: value };
  });

  return { updatedFolderStructure, updatedChoices };
}
