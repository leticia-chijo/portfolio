import { ReactNode, useState } from "react"

import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import colors from "../constants/colors"
import { motion } from "framer-motion"
import styled from "styled-components"

type Props = {
  children: ReactNode
  position: string
  company: string
  period: string
}

export default function Accordion({ children, position, company, period }: Readonly<Props>) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <MainContainer
      $isOpened={isOpened}
      initial={{ height: 30 }}
      animate={{ height: isOpened ? "auto" : 30 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <TopContainer onClick={() => setIsOpened(!isOpened)}>
        <h4>
          {position} <strong>@{company}</strong>
        </h4>

        <DateContainer>
          <p>{period}</p>
          <motion.div animate={{ rotate: isOpened ? 180 : 0, y: isOpened ? -2 : 0 }} transition={{ duration: 0.3 }}>
            <MdOutlineKeyboardArrowDown color={colors.primary} size={26} />
          </motion.div>
        </DateContainer>
      </TopContainer>

      <ContentContainer animate={{ opacity: isOpened ? 1 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
        {children}
      </ContentContainer>
    </MainContainer>
  )
}

const MainContainer = styled(motion.div)<{ $isOpened: boolean }>`
  overflow: hidden;
  width: 90%;
  padding: 16px;
  border: 1px solid ${colors.primary};
  border-radius: 20px;
  background-color: ${colors.primary}08;
  display: flex;
  flex-direction: column;
`
const TopContainer = styled.div`
  cursor: pointer;
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-family: "Calibri Light", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.textAccent};
  }
  strong {
    color: ${colors.primary};
  }
`
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  p {
    font-family: "SF Mono", monospace;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.textRegular};
  }
`
const ContentContainer = styled(motion.div)`
  margin: 8px 8px 0 8px;
`
