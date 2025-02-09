import { motion, useAnimation } from "framer-motion"

import colors from "../constants/colors"
import styled from "styled-components"
import { useEffect } from "react"

type Props = {
  onAnimationComplete: () => void
}

export default function AnimatedIntro({ onAnimationComplete }: Readonly<Props>) {
  const lineControl = useAnimation()
  const titleControl = useAnimation()
  const detailControl = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // Full time: 2200ms
      await new Promise((resolve) => setTimeout(resolve, 500))
      await lineControl.start({ width: "110%", transition: { duration: 0.3 } })
      await titleControl.start({ y: 0, opacity: 1, transition: { duration: 0.4 } })
      await detailControl.start({ y: 30, opacity: 1, transition: { duration: 0.4 } })
      await lineControl.start({ width: "0%", transition: { duration: 0.3 } })
      await new Promise((resolve) => setTimeout(resolve, 300))
      onAnimationComplete()
    }

    sequence()
  }, [lineControl, titleControl, detailControl, onAnimationComplete])

  return (
    <MainContainer>
      <TitleContainer initial={{ y: 30, opacity: 0 }} animate={titleControl}>
        <h1>Letícia Chijo</h1>
      </TitleContainer>

      <Line initial={{ width: "0%" }} animate={lineControl} />

      <DescriptionContainer initial={{ y: -30, opacity: 0 }} animate={titleControl}>
        <h2>Software Engineer & Coding Teacher</h2>
      </DescriptionContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  position: relative;
  @media (max-width: 660px) {
    margin: 50px 10px;
  }
`
const Line = styled(motion.div)`
  width: 0;
  height: 2px;
  border-radius: 1px;
  margin-top: -4px;
  background-color: ${colors.textAccent};
`
const TitleContainer = styled(motion.div)`
  font-size: 100px;
  font-family: "Script MT";
  color: ${colors.primary};
  @media (max-width: 660px) {
    font-size: 80px;
  }
  @media (max-width: 480px) {
    font-size: 60px;
  }
  @media (max-width: 350px) {
    font-size: 40px;
  }
`
const DescriptionContainer = styled(motion.div)`
  font-size: 22px;
  font-family: "Calibri Light";
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  left: 8px;
  top: 104px;
  color: ${colors.textAccent};
  @media (max-width: 660px) {
    font-size: 18px;
    top: 84px;
    left: 6px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    top: 64px;
    left: 4px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
    top: 44px;
    left: 4px;
  }
`
