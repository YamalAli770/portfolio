import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface ProfileItemProps {
    icon: ReactNode,
    href: string
}

const ProfileItem = ({ icon, href }: ProfileItemProps) => {
  return (
    <Link to={href} target="__blank" className="group bg-profile-social rounded-full p-3 transition-all hover:bg-white">
        <div className="group-hover:invert">
            {icon}
        </div>
    </Link>
  )
}

export default ProfileItem