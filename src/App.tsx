import AnimatedIntro from "./components/AnimatedIntro"
import styled from "styled-components"

export default function App() {
  return (
    <MainContainer>
      <AnimatedIntro />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: calc(100% - 100px);
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`