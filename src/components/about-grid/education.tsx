import CardMulti, { CardMultiProps } from "./card-multi"

const educationDetails: CardMultiProps = {
  title: "Education",
  items: [
    {
      period: "2020 - 2024",
      title: "Bachelor Software Engineering",
      description: "NED University of Engineering and Technology"
    },
    {
      period: "2018 - 2020",
      title: "Pre-Engineering",
      description: "Commecs College"
    },
  ]
}

const Education = () => {
  return (
    <div className="col-span-3">
      <CardMulti {...educationDetails} />
    </div>
  )
}

export default Education