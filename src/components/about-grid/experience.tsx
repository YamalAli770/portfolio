import CardMulti, { CardMultiProps } from "./card-multi"

const experienceDetails: CardMultiProps = {
  title: "Experience",
  items: [
    {
      period: "Nov 2023 - Jan 2024",
      title: "Back-End Developer Intern",
      description: "DTOUB Limited"
    },
    {
      period: "Mar 2023 - Apr 2023",
      title: "Software Engineering Intern",
      description: "Karachi Development Authority"
    },
    {
      period: "Jan 2023 - Mar 2023",
      title: "Front-End Developer Intern",
      description: "National Center of Cyber Security (NCCS-NED)"
    }
  ]
}

const Experience = () => {
  return (
    <div className="sm:col-span-4 col-span-7">
      <CardMulti {...experienceDetails} />
    </div>
  )
}

export default Experience