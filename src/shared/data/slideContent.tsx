import { SlideContent } from "@/shared/types/content.type";

export const tourPagesSlideContent: SlideContent = {
  undefined: (
    <div className="text-body">
      We start our journey through ReactVille at <b>Router Road</b>, a quaint old town pedestrian area. From here on, you will
      have to decide how you want to progress.
      <div className="text-divider"></div>
      While making your decisions, always keep in mind what kind of application you want to build, as the complexity of what
      you’re working on greatly affects which folder structure will work best for your project.
      <div className="text-divider"></div>
      Up first: Does your application only need a <b>single view</b> to function, or are <b>multiple</b> pages with navigation
      required?
    </div>
  ),
  false: (
    <div className="text-body">
      A simple application requires less nesting, so you don’t have to worry about a huge folder structure, just leave the
      structure as it is. You should still be able to find your way around.
      <div className="text-divider"></div>
      Alright, let's move on!
    </div>
  ),
  true: <div className="text-body">true</div>,
};
export const tourComponentsSlideContent: SlideContent = {
  undefined: <div className="text-body">undefined</div>,
  false: <div className="text-body">false</div>,
  true: <div className="text-body">true</div>,
};
export const tourStylesSlideContent: SlideContent = {
  undefined: <div className="text-body">undefined</div>,
  false: <div className="text-body">false</div>,
  true: <div className="text-body">true</div>,
};
export const tourStoreSlideContent: SlideContent = {
  undefined: <div className="text-body">undefined</div>,
  false: <div className="text-body">false</div>,
  true: <div className="text-body">true</div>,
};
export const tourRequestsSlideContent: SlideContent = {
  undefined: <div className="text-body">undefined</div>,
  false: <div className="text-body">false</div>,
  true: <div className="text-body">true</div>,
};
