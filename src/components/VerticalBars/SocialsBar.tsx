import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { GITHUB_URL, INSTAGRAM_URL, INTRODUCTION_URL, LINKEDIN_URL } from "../../constants/urls"

import { IoPlayCircleSharp } from "react-icons/io5"
import colors from "../../constants/colors"
import styled from "styled-components"

export default function SocialsBar() {
  const iconsSize = 32
  
  return (
    <>
      <SocialIcon as={FaGithub} onClick={() => window.open(GITHUB_URL, "_blank")} size={iconsSize} />
      <SocialIcon as={FaLinkedin} onClick={() => window.open(LINKEDIN_URL, "_blank")} size={iconsSize} />
      <SocialIcon as={FaInstagram} onClick={() => window.open(INSTAGRAM_URL, "_blank")} size={iconsSize} />
      <SocialIcon as={IoPlayCircleSharp} onClick={() => window.open(INTRODUCTION_URL, "_blank")} size={iconsSize} />
    </>
  )
}

const SocialIcon = styled.div`
  cursor: pointer;
  color: ${colors.textAccent};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`
