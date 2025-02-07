import { useCallback, useRef, useState } from "react"

import AboutMe from "./components/AboutMe"
import AnimatedIntro from "./components/AnimatedIntro"
import NavBar from "./components/NavBar"
import styled from "styled-components"

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const aboutRef = useRef<HTMLDivElement>(null!)

  const changeNav = useCallback(() => {
    setShowNav(true)
    setShowContent(true)
  }, [])

  return (
    <MainContainer $showNav={showNav}>
      {showNav && <NavBar aboutRef={aboutRef} />}
      <AnimatedIntro onAnimationComplete={changeNav} />
      {showContent && (
        <ContentContainer>
          <AboutMe ref={aboutRef} />
        </ContentContainer>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.div<{ $showNav: boolean }>`
  width: calc(100% - 100px);
  margin: ${(props) => (props.$showNav ? 20 : 70)}px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
