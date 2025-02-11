import { HideElementMobile } from "../../styles/Mobile"
import { ReactNode } from "react"
import colors from "../../constants/colors"
import styled from "styled-components"

type Props = {
  children: ReactNode
  side: "left" | "right"
}

export default function VerticalBar({ children, side }: Readonly<Props>) {
  return (
    <HideElementMobile>
      <MainContainer $side={side}>
        {children}
        <Line />
      </MainContainer>
    </HideElementMobile>
  )
}

const MainContainer = styled.div<{ $side: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  ${(props) => `${props.$side}: 50px;`}
  bottom: 0;
  gap: 28px;
  width: 24px;
`
const Line = styled.div`
  height: 100px;
  width: 2px;
  background-color: ${colors.textRegular};
  @media (max-height: 500px) {
    height: 0;
  }
`
