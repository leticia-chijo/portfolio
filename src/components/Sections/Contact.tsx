import { EMAIL } from "../../constants/urls"
import PopButton from "../PopButton"
import colors from "../../constants/colors"
import styled from "styled-components"

export default function Contact() {
  return (
    <MainContainer>
      <p>
        I am currently <strong>looking for any new opportunities</strong>, so my inbox is always open. Whether you have
        a question or just want to say hi, I'll try my best to get back to you as soon as possible!
      </p>
      <PopButton onClick={() => (window.location.href = `mailto:${EMAIL}`)}>
        <div>Say Hello!</div>
      </PopButton>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    width: 80%;
    font-family: "Calibri Light", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: ${colors.textRegular};
  }
  strong {
    color: ${colors.primary};
  }
  div {
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
