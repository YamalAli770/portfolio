import Intro from "./intro"
import ScrollText from "./scroll-text"
import Credentials from "./credentials"
import Projects from "./projects"
import Blog from "./blog"
import Profiles from "./profiles"
import WorkTogether from "./work-together"
import Services from "./services"

const MainGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-5 text-white mt-28">
        <Intro />
        <div className="flex flex-col lg:col-span-2 col-span-5 gap-5">
            <ScrollText />
            <div className="flex lg:flex-row flex-col flex-1 w-full gap-5">
                <Credentials />
                <Projects />
            </div>
        </div>
        <Blog />
        <Services />
        <Profiles />
        <WorkTogether />
    </div>
  )
}

export default MainGrid