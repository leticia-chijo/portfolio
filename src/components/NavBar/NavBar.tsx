import NavButton from "./NavButton"
import NavLogo from "./NavLogo"
import NavPopButton from "../PopButton"
import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>
  experiencesRef: React.RefObject<HTMLDivElement>
}

export default function NavBar({ aboutRef, experiencesRef }: Readonly<Props>) {
  const containerVariants = { visible: { transition: { staggerChildren: 0.07 } } }

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <MainContainer initial="hidden" animate="visible" variants={containerVariants}>
      <NavLogo onClick={() => console.log("Top")} variants={itemVariants} />

      <ButtonsContainer>
        <NavButton onClick={() => scrollToRef(aboutRef)} variants={itemVariants} order={1}>
          About
        </NavButton>

        <NavButton onClick={() => scrollToRef(experiencesRef)} variants={itemVariants} order={2}>
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
