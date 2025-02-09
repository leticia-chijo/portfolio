import { ReactNode } from "react"
import colors from "../../constants/colors"
import styled from "styled-components"

type Props = {
  children: ReactNode
  side: "left" | "right"
}

export default function VerticalBar({ children, side }: Readonly<Props>) {
  return (
    <MainContainer $side={side}>
      {children}
      <Line />
    </MainContainer>
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
  gap: 30px;
  width: 24px;
`
const Line = styled.div`
  height: 150px;
  width: 2px;
  background-color: ${colors.textRegular};
`
