import EmailBar from "./VerticalBars/EmailBar"
import { PORTFOLIO_REPO_URL } from "../constants/urls"
import { ShowElementMobile } from "../styles/Mobile"
import SocialsBar from "./VerticalBars/SocialsBar"
import colors from "../constants/colors"
import styled from "styled-components"

export default function Footer() {
  return (
    <MainContainer>
      <ShowElementMobile>
        <SocialsContainer>
          <SocialsBar />
        </SocialsContainer>
        <EmailBar />
      </ShowElementMobile>
      <Line />
      <Text href={PORTFOLIO_REPO_URL} target="_blank">
        Made with <strong>♥</strong> (and React) by Letícia Chijo
      </Text>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 450px;
  margin-bottom: 140px;
  @media (max-width: 720px) {
    margin-top: 150px;
    margin-bottom: 0;
  }
`
const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: ${colors.textRegular};
  margin-bottom: 30px;
  @media (max-width: 720px) {
    margin-top: 30px;
  }
`
const Text = styled.a`
  cursor: pointer;
  font-family: "SF Mono", monospace;
  color: ${colors.textRegular};
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  text-align: center;
  &:hover {
    color: ${colors.primary};
  }
  strong {
    color: ${colors.primary};
  }
  @media (max-width: 720px) {
    font-size: 16px;
    margin: 0 20px;
  }
`
const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  margin-bottom: 15px;
`
