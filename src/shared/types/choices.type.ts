export interface Choices {
  selectedChoices: SelectedChoices;
  highlightedChoice: HighlightedChoice;
}

export interface SelectedChoices {
  pages?: boolean;
  components?: boolean;
  styles?: boolean;
  store?: boolean;
  requests?: boolean;
  shared?: boolean;
}

export type HighlightedChoice = "pages" | "components" | "styles" | "store" | "requests" | "shared" | undefined;
