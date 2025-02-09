import { PORTFOLIO_REPO_URL } from "../constants/urls"
import colors from "../constants/colors"
import styled from "styled-components"

export default function Footer() {
  return (
    <MainContainer>
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
  margin-top: 450px;
  margin-bottom: 140px;
`
const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: ${colors.textRegular};
  margin-bottom: 30px;
`
const Text = styled.a`
  cursor: pointer;
  font-family: "SF Mono", monospace;
  color: ${colors.textRegular};
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
  strong {
    color: ${colors.primary};
  }
`
