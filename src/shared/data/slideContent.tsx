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
      Up first: Does your application only need a <b>single view</b> to function, or are <b>multiple pages</b> with navigation
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
  true: (
    <div className="text-body">
      In this case you will need a <b>router</b>, which helps you assign specific pages within your application to routes. The
      established router for react projects is called <b>React Router</b> and to use it you will need to install it as a package.
      <div className="text-divider"></div>
      If this is your first time hearing about the React Router, click{" "}
      <a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" referrerPolicy="no-referrer">
        here
      </a>{" "}
      for more information and how to install the package.
      <div className="text-divider"></div>
      Okay, let's move on to the next stop of our Tour!
    </div>
  ),
};

export const tourComponentsSlideContent: SlideContent = {
  undefined: (
    <div className="text-body">
      We have arrived at <b>Component Close</b>, now that we are here let’s answer an important question: What are{" "}
      <b>components</b>?<div className="text-divider"></div>
      Components are what you need to build a user interface, they are bits of code that are independent and reusable, like
      buttons or search bars. Styling a component so that it fits your interface and then using it many times will give your
      project a consistent look and feel.
      <div className="text-divider"></div>
      Now when you think about your application will you need only a few or more than five components to make it work?
    </div>
  ),
  false: (
    <div className="text-body">
      With less than five components it’s best to keep them all in one <b>'components' folder</b>. That way you can find them
      easily.
      <div className="text-divider"></div>
      If you are working with unit tests, just name the test files the same way you named your components and add them to your
      'components' folder, don't bother with sub-folders.
      <div className="text-divider"></div>
      Alright, the next stop of our Tour is a particularly pretty one. Let's go!
    </div>
  ),
  true: (
    <div className="text-body">
      With many components in your application it’s best to give every single component its own sub folder in the{" "}
      <b>'components' folder</b>.<div className="text-divider"></div>
      In each component folder you can then put all files related to said component, such as the main JSX file, styling, and unit
      tests. This helps with making the 'components' folder feel less cluttered, as you only ever have to open the component
      folders you want to work on, effectively hiding the rest.
      <div className="text-divider"></div>
      We're done here, so let's move on to our next destination!
    </div>
  ),
};

export const tourComponentsWithPagesSlideContent: SlideContent = {
  undefined: (
    <div className="text-body">
      We have arrived at <b>Component Close</b>, now that we are here let’s answer an important question: What are{" "}
      <b>components</b>?<div className="text-divider"></div>
      Components are what you need to build a user interface, they are bits of code that are independent and reusable, like
      buttons or search bars. Styling a component so that it fits your interface and then using it many times will give your
      project a consistent look and feel.
      <div className="text-divider"></div>
      Now when you think about your application, will you need only a few or more than five components to make it work?
    </div>
  ),
  false: (
    <div className="text-body">
      As you only have a few components and pages, it’s best to put all of them directly into their respective folders without
      adding additional sub-folders.
      <div className="text-divider"></div>
      Sub-folders only make sense if you have a large quantity of files, otherwise they only add complexity without any added
      benefits.
      <div className="text-divider"></div>
      Alright, the next stop of our Tour is a very busy one. Let's go!
    </div>
  ),
  true: (
    <div className="text-body">
      With many components and pages in your application it’s best to give every single component and page its own sub folder in
      their respective folders.
      <div className="text-divider"></div>
      In each folder you can then put all files related to said component or page, such as the main JSX file, styling, and unit
      tests. This helps with making the ‘components’ and ‘pages’ folders feel less cluttered, as you only ever have to open the
      folders you want to work on, effectively hiding the rest.
      <div className="text-divider"></div>
      We're done here, so let's move on to our next destination!
    </div>
  ),
};

export const tourStylesSlideContent: SlideContent = {
  undefined: (
    <div className="text-body">
      Some say the prettiest place in Reactville, but there might be some shady figures around, welcome to <b>Styles Square</b>.
      <div className="text-divider"></div>
      Do you think you will need a lot of styling in your application?
    </div>
  ),
  false: (
    <div className="text-body">
      As you don’t have a lot of styling it’s best to place the few styling files you have into <b>'styles' folder</b> in 'src'.
      This way its easy to find and you don’t clutter other folders with more files with very little content.
      <div className="text-divider"></div>
      Time to say goodbye to <b>Style Square</b> as we're about to move on to the next place!
    </div>
  ),
  true: (
    <div className="text-body">
      When you have a lot of styling it’s best to separate it into <b>individual files</b> and then place them with the JSX files
      that use them. In this case every component gets a corresponding CSS in the ‘components’ folder.
      <div className="text-divider"></div>
      Time to say goodbye to <b>Style Square</b> as we're about to move on to the next place!
    </div>
  ),
};

export const tourStoreSlideContent: SlideContent = {
  undefined: (
    <div className="text-body">
      Our Tour has led us to <b>Store Mall</b>! A bit of an uninspired name for a shopping mall, but I digress.
      <div className="text-divider"></div>
      It’s now time to choose whether you want to add a <b>store</b> such as{" "}
      <a href="https://redux.js.org/introduction/getting-started" target="_blank" referrerPolicy="no-referrer">
        Redux
      </a>{" "}
      to your application. Within React, components often have to interact with one another, for example one component might
      change a value which is used by a different component. A store helps you control state management from one central place
      that all parts of your application can access. This makes your code both more robust and more readable.
      <div className="text-divider"></div>A simple application with limited user interaction might not benefit as much from a
      store, while a large one certainly does.
    </div>
  ),
  false: (
    <div className="text-body">
      Alright, in that case nothing changes for you! Fortunately adding a store to your application later on is always an option
      if you ever change your mind.
      <div className="text-divider"></div>
      Make sure to stick with us as we move on, our next destination is usually quite crowded!
    </div>
  ),
  true: (
    <div className="text-body">
      We’ll add a store in a separate <b>'store' folder</b> to the 'src' folder, as it works independently from the rest of the
      applications. In this folder you can set up the configuration and features the store requires.
      <div className="text-divider"></div>
      We're slowly but surely reaching the end of our Tour, just two more stops!
    </div>
  ),
};

export const tourRequestsSlideContent: SlideContent = {
  undefined: <div className="text-body">undefined</div>,
  false: <div className="text-body">false</div>,
  true: <div className="text-body">true</div>,
};
