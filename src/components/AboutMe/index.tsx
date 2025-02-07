import Content from "./Content"
import SectionHeader from "../SectionHeader"
import { forwardRef } from "react"
import { motion } from "motion/react"
import styled from "styled-components"

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <MainContainer ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <SectionHeader order={1} text="About Me" />
      <div>
        <Content />
      </div>
    </MainContainer>
  )
})

export default AboutMe

const MainContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
