import { Variants, motion } from "framer-motion"

import { ReactNode } from "react"
import colors from "../../constants/colors"
import styled from "styled-components"

type Props = {
  onClick: () => void
  children: ReactNode
  order: number
  variants?: Variants
}

export default function NavButton({ children, order, variants, onClick }: Readonly<Props>) {
  return (
    <MainContainer onClick={onClick} variants={variants}>
      <Text>0{order}. </Text>
      {children}
    </MainContainer>
  )
}

const MainContainer = styled(motion.button)`
  font-family: "SF Mono", monospace;
  color: ${colors.textRegular};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`
const Text = styled.span`
  font-family: "SF Mono", monospace;
  color: ${colors.primary};
`
