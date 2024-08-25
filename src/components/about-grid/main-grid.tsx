import Education from "./education"
import Experience from "./experience"
import ProfilePic from "./profile-pic"
import Summary from "./summary"
import TechStack from "./tech-stack"

const MainGrid = () => {
  return (
    <div className="grid grid-cols-7 gap-5 mt-28">
        <ProfilePic />
        <Summary />
        <TechStack />
        <Experience />
        <Education />
    </div>
  )
}

export default MainGrid