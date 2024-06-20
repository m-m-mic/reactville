export const relatedSlides: { [id: string]: string[] } = {
  landing: ["quickSelect", "explanation"],
  quickSelect: ["landing", "result"],
  explanation: ["landing", "boilerplate"],
  boilerplate: ["explanation", "tourPages"],
  tourPages: ["boilerplate", "tourComponents"],
  tourComponents: ["tourPages", "tourStyles", "tourStore"],
  tourStyles: ["tourComponents", "tourStore"],
  tourStore: ["tourComponents", "tourStyles", "tourRequests"],
  tourRequests: ["tourStore", "tourShared"],
  tourShared: ["tourRequests", "result"],
  result: ["quickSelect", "tourShared"],
};
