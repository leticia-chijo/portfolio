import colors from "../constants/colors"
import styled from "styled-components"

export const ChipsList = styled.ul`
  margin: -4px;
  display: flex;
  flex-wrap: wrap;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Calibri Light", sans-serif;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    background-color: ${colors.primary}08;
    color: ${colors.textAccent};
    border: 1px solid ${colors.primary};
    border-radius: 30px;
    padding: 8px 16px;
    margin: 4px;
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 12px 0;
  }
`
