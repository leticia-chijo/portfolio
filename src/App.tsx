import { useCallback, useRef, useState } from "react"

import AboutMe from "./components/Sections/AboutMe"
import AnimatedIntro from "./components/AnimatedIntro"
import Contact from "./components/Sections/Contact"
import Experiences from "./components/Sections/Experiences"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar/NavBar"
import SectionWrapper from "./components/Sections/SectionWrapper"
import { motion } from "framer-motion"
import styled from "styled-components"

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const aboutRef = useRef<HTMLDivElement>(null!)
  const experiencesRef = useRef<HTMLDivElement>(null!)
  const contactRef = useRef<HTMLDivElement>(null!)

  const changeNav = useCallback(() => {
    setShowNav(true)
    setShowContent(true)
  }, [])

  return (
    <MainContainer $showNav={showNav}>
      {showNav && <NavBar aboutRef={aboutRef} experiencesRef={experiencesRef} contactRef={contactRef} />}
      <AnimatedIntro onAnimationComplete={changeNav} />
      {showContent && (
        <ContentContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <SectionWrapper ref={aboutRef} headerOrder={1} headerText="About Me">
            <AboutMe />
          </SectionWrapper>
          <SectionWrapper ref={experiencesRef} headerOrder={2} headerText="Where I've Worked">
            <Experiences />
          </SectionWrapper>
          <SectionWrapper ref={contactRef} headerOrder={3} headerText="Get In Touch">
            <Contact />
          </SectionWrapper>
          <Footer />
        </ContentContainer>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.div<{ $showNav: boolean }>`
  width: calc(100% - 100px);
  margin: 70px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentContainer = styled(motion.div)`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
