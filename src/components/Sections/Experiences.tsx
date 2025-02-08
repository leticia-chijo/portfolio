import Accordion from "../Accordion"
import styled from "styled-components"

export default function Experiences() {
  return (
    <MainContainer>
      <Accordion company="Outsmart" position="Software Engineer" period="Jan 2020 - Dec 2020">
        <div>
          <p>example</p>
          <p>example</p>
          <p>example</p>
          <p>example</p>
        </div>
      </Accordion>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    color: white;
  }
`
