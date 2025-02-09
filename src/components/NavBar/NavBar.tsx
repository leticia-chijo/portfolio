import { HideElementMobile } from "../../styles/Mobile"
import NavButton from "./NavButton"
import NavLogo from "./NavLogo"
import NavPopButton from "../PopButton"
import { RESUME_URL } from "../../constants/urls"
import colors from "../../constants/colors"
import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>
  experiencesRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function NavBar({ aboutRef, experiencesRef, contactRef }: Readonly<Props>) {
  const containerVariants = { visible: { transition: { staggerChildren: 0.07 } } }

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <MainContainer initial="hidden" animate="visible" variants={containerVariants}>
      <NavLogo onClick={scrollToTop} variants={itemVariants} />

      <ButtonsContainer>
        <HideElementMobile $break={560}>
          <NavButton onClick={() => scrollToRef(aboutRef)} variants={itemVariants} order={1}>
            About
          </NavButton>

          <NavButton onClick={() => scrollToRef(experiencesRef)} variants={itemVariants} order={2}>
            Experience
          </NavButton>

          <NavButton onClick={() => scrollToRef(contactRef)} variants={itemVariants} order={3}>
            Contact
          </NavButton>
        </HideElementMobile>
        <NavPopButton onClick={() => window.open(RESUME_URL, "_blank")} variants={itemVariants}>
          Resume
        </NavPopButton>
      </ButtonsContainer>
    </MainContainer>
  )
}

const MainContainer = styled(motion.div)`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(0, ${colors.background}00, ${colors.background} 20%);
  @media (max-width: 560px) {
    padding: 16px 20px;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 560px) {
    button {
      font-size: 12px;
    }
  }
`
