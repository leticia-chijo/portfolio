import { EMAIL } from "../../constants/urls"
import VerticalBar from "./VerticalBar"
import colors from "../../constants/colors"
import styled from "styled-components"

export default function RightBar() {
  return (
    <VerticalBar side="right">
      <Email onClick={() => (window.location.href = `mailto:${EMAIL}`)}>{EMAIL}</Email>
    </VerticalBar>
  )
}

const Email = styled.p`
  cursor: pointer;
  writing-mode: vertical-lr;
  letter-spacing: 2px;
  font-size: 11px;
  font-family: "SF Mono", monospace;
  color: ${colors.textRegular};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`
