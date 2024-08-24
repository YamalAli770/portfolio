import { ReactNode } from "react"
import { Link } from "react-router-dom"

export interface SocialItemProps {
    icon: ReactNode,
    href: string
}

const SocialItem = ({ icon, href }: SocialItemProps) => {
  return (
    <Link to={href} className="bg-card-bg-dark border border-gray-800 rounded-full p-5 transition-all hover:invert">
        {icon}
    </Link>
  )
}

export default SocialItem