import styled from "styled-components"

export const HideElementMobile = styled.span<{ $break?: number }>`
  @media (max-width: ${({ $break }) => $break ?? 720}px) {
    display: none;
  }
`
export const ShowElementMobile = styled.span<{ $break?: number }>`
  @media (min-width: ${({ $break }) => ($break ?? 720) + 1}px) {
    display: none;
  }
`
