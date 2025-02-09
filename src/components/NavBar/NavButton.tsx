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
  font-size: 16px;
  color: ${colors.textRegular};
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`
const Text = styled.span`
  font-family: "SF Mono", monospace;
  color: ${colors.primary};
  @media (max-width: 720px) {
    display: none;
  }
`
