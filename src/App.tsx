import {useEffect, useState} from 'react'

import './App.css'
import "./shared/styles/slide.css"
import {Slide, SlideId} from "./shared/types/slide.type.ts";
import LandingSlide from "./components/LandingSlide/LandingSlide.component.tsx";
import BoilerPlateSlide from "./components/BoilerPlateSlide/BoilerPlateSlide.component.tsx";

export default function App() {
    const [slideStack, setSlideStack] = useState<Slide[]>([{id: SlideId.Landing, variant: 0}])

    useEffect(()=> { console.log(slideStack)}, [slideStack])

    const setNextSlide = (slide: Slide) => {
        setSlideStack([...slideStack, slide])
    }

    const returnToLastSlide = () => {
        const tempStack = [...slideStack]
        tempStack.splice(-1)
        setSlideStack(tempStack)
    }

  return (
      <>
          <LandingSlide slideStack={slideStack} setNextSlide={setNextSlide} returnToLastSlide={returnToLastSlide} />
          <BoilerPlateSlide slideStack={slideStack} setNextSlide={setNextSlide} returnToLastSlide={returnToLastSlide} />
      </>
  )
}
