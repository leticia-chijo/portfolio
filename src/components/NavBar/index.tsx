import NavButton from "./NavButton"
import NavLogo from "./NavLogo"
import NavPopButton from "../PopButton"
import { motion } from "motion/react"
import styled from "styled-components"

export default function NavBar() {
  const containerVariants = { visible: { transition: { staggerChildren: 0.07 } } }

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <MainContainer initial="hidden" animate="visible" variants={containerVariants}>
      <NavLogo onClick={() => console.log("Top")} variants={itemVariants} />

      <ButtonsContainer>
        <NavButton onClick={() => console.log("About")} variants={itemVariants} order={1}>
          About
        </NavButton>

        <NavButton onClick={() => console.log("Experience")} variants={itemVariants} order={2}>
          Experience
        </NavButton>

        <NavButton onClick={() => console.log("Contact")} variants={itemVariants} order={3}>
          Contact
        </NavButton>

        <NavPopButton onClick={() => console.log("Resume")} variants={itemVariants}>
          Resume
        </NavPopButton>
      </ButtonsContainer>
    </MainContainer>
  )
}

const MainContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`
