import { ChipsList } from "../ChipsList"
import colors from "../../constants/colors"
import photo from "../../assets/images/picture.png"
import styled from "styled-components"

export default function AboutMe() {
  return (
    <MainContainer>
      <TextContainer>
        <p>
          Hello! I'm Letícia, a software engineer with <strong>over seven years of experience</strong> in front-end,
          mobile, and full-stack development.
        </p>
        <p>
          I graduated in <strong>Computer Engineering</strong> at University of São Paulo (USP) and began my career at a
          software house, developing over 20 applications and collaborating with the design team to create the company's
          design system.
        </p>
        <p>
          After that, I co-founded the no-code platform Atlantica and later transitioned to{" "}
          <strong>tech education</strong>, teaching and mentoring students in front-end and back-end development.
        </p>
        <p>
          Here are some of the <strong>technologies</strong> I've been working with recently:
        </p>
        <ChipsList>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>NextJS</li>
          <li>Redux</li>
          <li>Cypress</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Prisma</li>
          <li>Jest</li>
        </ChipsList>
      </TextContainer>

      <Image src={photo} alt="Picture of a woman smiling" />
    </MainContainer>
  )
}
const MainContainer = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`
const TextContainer = styled.div`
  flex-grow: 1;
  p {
    text-align: justify;
    text-justify: inter-word;
    font-family: "Calibri Light", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: ${colors.textRegular};
    margin-bottom: 12px;
    @media (max-width: 1200px) {
      line-height: 24px;
      margin-bottom: 8px;
      text-align: center;
    }
  }
  strong {
    color: ${colors.primary};
  }
`
const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin-left: 40px;
  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
  @media (max-width: 720px) {
    width: 200px;
    height: 200px;
    margin-left: 0;
    margin-bottom: 20px;
  }
`
