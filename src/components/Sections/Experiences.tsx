import Accordion from "../Accordion"
import { ChipsList } from "../ChipsList"
import colors from "../../constants/colors"
import { experiences } from "../../constants/experiences"
import styled from "styled-components"

export default function Experiences() {
  return (
    <MainContainer>
      {experiences.map((exp) => (
        <Accordion
          key={exp.company}
          company={exp.company}
          position={exp.position}
          startDate={exp.startDate}
          endDate={exp.endDate}
        >
          <TasksList>
            {exp.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </TasksList>
          <ChipsList>
            {exp.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ChipsList>
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
