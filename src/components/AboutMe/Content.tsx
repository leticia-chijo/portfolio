import colors from "../../constants/colors"
import photo from "../../assets/images/picture.png"
import styled from "styled-components"

export default function Content() {
  return (
    <>
      <TextContainer>
        <p>
          Hello! I'm Letícia, a software engineer with <strong>over seven years of experience</strong> in front-end,
          mobile, and full-stack development.
        </p>
        <p>
          I graduated in <strong>Computer Engineering</strong> and began my career at a software factory, developing
          over 20 applications and collaborating with the design team to create the company's design system.
        </p>
        <p>
          After that, I co-founded the no-code platform Atlantica and later transitioned to{" "}
          <strong>tech education</strong>, teaching and mentoring students in front-end and back-end development.
        </p>
        <p>
          Here are some of the <strong>technologies</strong> I've been working with recently:
        </p>
        <List>
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
        </List>
      </TextContainer>

      <Image src={photo} alt="Picture of a woman smiling" />
    </>
  )
}
const TextContainer = styled.div`
  flex-grow: 1;
  p {
    font-family: "Calibri Light", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: ${colors.textRegular};
    margin-bottom: 12px;
  }
  strong {
    color: ${colors.primary};
  }
`
const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin-left: 30px;
`
const List = styled.ul`
  margin: -4px;
  li {
    display: inline-block;
    font-family: "Calibri Light", sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-color: ${colors.primary}08;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    border-radius: 30px;
    padding: 8px 16px;
    margin: 4px;
  }
`
