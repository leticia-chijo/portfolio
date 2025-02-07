import { useCallback, useState } from "react"

import AnimatedIntro from "./components/AnimatedIntro"
import NavBar from "./components/NavBar"
import styled from "styled-components"

export default function App() {
  const [showNav, setShowNav] = useState(false)

  const changeNav = useCallback(() => setShowNav(true), [])

  return (
    <MainContainer $showNav={showNav}>
      {showNav && <NavBar />}
      <AnimatedIntro onAnimationComplete={changeNav} />
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
