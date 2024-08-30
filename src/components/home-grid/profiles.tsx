import { Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import CardMulti from "./card-multi"
import ProfileItem from "./profile-item"

const socialProfiles = [
  {
    icon: <Linkedin color="white" size={30} />,
    href: "https://www.linkedin.com/in/yamalali"
  },
  {
    icon: <Github color="white" size={30} />,
    href: "https://github.com/YamalAli770"
  }
]

const ProfileList  = () => {
  return (
    <Card className="w-full h-full rounded-3xl bg-card-bg-lighter border-gray-800">
      <CardContent className="pt-6 flex xl:justify-between justify-around items-center h-full">
        {socialProfiles.map((profile, index) => (
          <ProfileItem key={index} icon={profile.icon} href={profile.href} />
        ))}
      </CardContent>
    </Card>
  )
}

const Profiles = () => {
  return (
    <div className="xl:col-span-1 md:col-span-2 col-span-5">
      <CardMulti cardLogo={<ProfileList />} text="Stay With Me" title="Profiles" href="contact" />
    </div>
  )
}

export default Profiles