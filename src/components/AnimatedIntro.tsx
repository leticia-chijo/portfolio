import { motion, useAnimation } from "motion/react"

import colors from "../constants/colors"
import styled from "styled-components"
import { useEffect } from "react"

export default function AnimatedIntro() {
  const lineControl = useAnimation()
  const titleControl = useAnimation()
  const detailControl = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // Full time: 2000ms
      await new Promise((resolve) => setTimeout(resolve, 600))
      await lineControl.start({ width: "110%", transition: { duration: 0.3 } })
      await titleControl.start({ y: 0, opacity: 1, transition: { duration: 0.4 } })
      await detailControl.start({ y: 30, opacity: 1, transition: { duration: 0.4 } })
      await lineControl.start({ width: "0%", transition: { duration: 0.3 } })
    }
    sequence()
  }, [lineControl, titleControl, detailControl])

  return (
    <MainContainer>
      <TitleContainer initial={{ y: 30, opacity: 0 }} animate={titleControl}>
        Letícia Chijo
      </TitleContainer>

      <Line initial={{ width: "0%" }} animate={lineControl} />

      <DescriptionContainer initial={{ y: -30, opacity: 0 }} animate={titleControl}>
        Software Engineer & Coding Teacher
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
`
