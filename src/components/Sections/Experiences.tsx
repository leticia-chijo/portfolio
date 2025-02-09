import Accordion from "../Accordion"
import colors from "../../constants/colors"
import { experiences } from "../../constants/experiences"
import styled from "styled-components"

export default function Experiences() {
  return (
    <MainContainer>
      {experiences.map((exp) => (
        <Accordion key={exp.company} company={exp.company} position={exp.position} period={exp.period}>
          <TasksList>
            {exp.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </TasksList>
          <TechsList>
            {exp.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </TechsList>
        </Accordion>
      ))}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`
const TasksList = styled.ul`
  list-style: disc;
  padding: 10px 20px;
  li {
    color: ${colors.textRegular};
    font-family: "Calibri Light", sans-serif;
    font-size: 19px;
    font-weight: 600;
    color: ${colors.textRegular};
    margin-bottom: 10px;
    &::marker {
      color: ${colors.primary};
    }
  }
`
const TechsList = styled.ul`
  li {
    display: inline-block;
    font-family: "Calibri Light", sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-color: ${colors.primary}08;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    border-radius: 30px;
    padding: 8px 16px;
    margin: 4px;
  }
`
