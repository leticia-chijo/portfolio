import { ReactNode, forwardRef } from "react"

import SectionHeader from "./SectionHeader"
import styled from "styled-components"

type Props = {
  children: ReactNode
  headerOrder: number
  headerText: string
}

const SectionWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children, headerOrder, headerText }: Readonly<Props>, ref) => {
    return (
      <MainContainer ref={ref}>
        <SectionHeader order={headerOrder} text={headerText} />
        <div>{children}</div>
      </MainContainer>
    )
  }
)

export default SectionWrapper

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
