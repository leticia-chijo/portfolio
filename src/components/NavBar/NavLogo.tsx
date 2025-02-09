import { Variants, motion } from "framer-motion"

import colors from "../../constants/colors"
import logo from "../../assets/images/logo_letters.png"
import styled from "styled-components"

type Props = {
  onClick: () => void
  variants?: Variants
}

export default function NavLogo({ variants, onClick }: Readonly<Props>) {
  return (
    <Logo
      onClick={onClick}
      src={logo}
      alt="LC"
      whileHover={{ x: -4, y: -4, boxShadow: `2px 2px 0 ${colors.primary}` }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      variants={variants}
    />
  )
}

const Logo = styled(motion.img)`
  cursor: pointer;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  padding: 8px;
  border: 2px solid ${colors.primary};
  border-radius: 50px;
  background-color: ${colors.background};
  @media (max-width: 560px) {
    width: 40px;
    height: 40px;
  }
`
