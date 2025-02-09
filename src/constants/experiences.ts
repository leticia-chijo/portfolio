type Experience = {
  company: string
  position: string
  startDate: string
  endDate: string
  tasks: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Driven",
    position: "Full Stack Software Instructor",
    startDate: "Jul 2022",
    endDate: "Nov 2024",
    tasks: [
      "Taught front-end and back-end development in live classes, covering coding skills and best practices.",
      "Restructured several course modules, developing new lessons, projects, and educational materials to enhance the student experience.",
      "Created and taught a mini-course on back-end development with Java and Spring, expanding career opportunities for students.",
      "Participated in the creation of a new course with recorded lessons, adapting content and recording approximately 50 hours of video material.",
      "Developed an internal BI platform to monitor student data from the recorded course, improving the direction of support and assistance."
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Styled Components",
      "NextJS",
      "NodeJS",
      "Express",
      "Jest",
      "Cypress",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Java",
      "Spring Boot"
    ]
  },
  {
    company: "Labenu",
    position: "Front End Instructor & Coordinator",
    startDate: "Jul 2020",
    endDate: "Jul 2022",
    tasks: [
      "Taught front-end development in live classes for over 20 groups, covering coding skills and best practices.",
      "Restructured the whole front-end course, developing new lessons, projects, and educational materials to enhance student learning.",
      "Led the pedagogical team, guiding teachers and monitors while promoting training for professional development.",
      "Coordinated the course groups, addressing student issues and managing team allocation.",
      "Established the student data tracking system, facilitating progress monitoring.",
      "Created and coordinated the content team, where I scripted and produced videos for Instagram and YouTube in collaboration with the marketing team.",
      "Organized and hosted the LabeCast, the school’s podcast, sharing knowledge with the community."
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Styled Components",
      "Redux",
      "Context API",
      "Material UI",
      "Design Systems",
      "Leadership",
      "Content Creation"
    ]
  },
  {
    company: "Atlantica App",
    position: "Co-Founder & Software Engineer",
    startDate: "Jan 2020",
    endDate: "Sep 2022",
    tasks: [
      "Developed the no-code app creation platform using React, React Native, and Node.js.",
      "Participated in the product conception alongside the other co-founders of the company.",
      "Led marketing initiatives and content creation to promote the product.",
      "Created video tutorials on YouTube to demonstrate the platform's features and teach users how to make the most of it."
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "React n",
      "Styled Components",
      "Material UI",
      "Design System",
      "Stripe",
      "Firebase",
      "NodeJS",
      "Express",
      "DynamoDB",
      "PWA"
    ]
  },
  {
    company: "Outsmart",
    position: "Software Engineer",
    startDate: "Jan 2018",
    endDate: "Sep 2020",
    tasks: [
      "Developed over 20 applications in areas such as e-commerce, social networks and digital medical records.",
      "Collaborated with the design team to create an internal Design System that accelerated product development.",
      "Performed maintenance on applications and websites, fixing bugs and implementing new features to enhance user experience.",
      "Led the React Chapter, facilitating meetings to discuss best practices and insights among React and React Native developers.",
      "Coordinated the presentations for the company's weekly meetings, sharing relevant information with the entire team.",
      "Structured the standardization of the company's documentation, increasing developer engagement and facilitating the onboarding of new team members."
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "React Native",
      "Design System",
      "Expo",
      "Android",
      "Java",
      "Kotlin",
      "NodeJS",
      "PostgreSQL",
      "MongoDB",
      "GraphQL"
    ]
  },
  {
    company: "POLI-USP",
    position: "Undergraduate Research",
    startDate: "Jan 2015",
    endDate: "Dez 2016",
    tasks: [
      "Developed a method to estimate urban traffic speed using flow count data and bus tracking in a SQL database from SPTrans.",
      "Created lessons for a hands-on laboratory on Intelligent Transportation Systems (ITS) and Geographic Information Systems in Transportation (GIS-T) for undergraduate and graduate courses in civil engineering. The lessons cover SQL concepts and data insertion into traffic simulation tools, such as VISSIM.",
      "Prepared academic reports on both experiences, as well as presentations at conferences."
    ],
    technologies: ["SQL Server", "Vissim"]
  }
]
