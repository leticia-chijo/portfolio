import { EMAIL } from "../../constants/urls"
import colors from "../../constants/colors"
import styled from "styled-components"

export default function EmailBar() {
  return <Text onClick={() => (window.location.href = `mailto:${EMAIL}`)}>{EMAIL}</Text>
}

const Text = styled.p`
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
  @media (max-width: 720px) {
    writing-mode: unset;
  }
`
