import { Variants, motion } from "motion/react"

import { ReactNode } from "react"
import colors from "../constants/colors"
import styled from "styled-components"

type Props = {
  onClick: () => void
  children: ReactNode
  variants?: Variants
}

export default function PopButton({ children, variants, onClick }: Readonly<Props>) {
  return (
    <ResumeButton
      variants={variants}
      onClick={onClick}
      whileHover={{ x: -4, y: -4, boxShadow: `2px 2px 0 ${colors.primary}` }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </ResumeButton>
  )
}

const ResumeButton = styled(motion.button)`
  font-family: "SF Mono", monospace;
  padding: 8px 12px;
  box-sizing: border-box;
  border: 2px solid ${colors.primary};
  border-radius: 20px;
  color: ${colors.primary};
  background-color: ${colors.background};
`
