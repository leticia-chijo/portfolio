import colors from "../../constants/colors"
import styled from "styled-components"

type Props = {
  order: number
  text: string
}

export default function SectionHeader({ order, text }: Readonly<Props>) {
  return (
    <MainContainer>
      <Order>0{order}. </Order>
      <Title>{text}</Title>
      <Line />
    </MainContainer>
  )
}
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;
`
const Order = styled.h3`
  display: inline-block;
  font-family: "SF Mono", monospace;
  font-size: 24px;
  color: ${colors.primary};
  margin-right: 8px;
`
const Title = styled.h3`
  display: inline-block;
  font-family: "Calibri Light", sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: ${colors.textAccent};
  position: relative;
`
const Line = styled.div`
  display: inline-block;
  flex-grow: 1;
  height: 1px;
  background-color: ${colors.textRegular};
  margin-left: 8px;
`
