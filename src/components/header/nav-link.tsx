import { NavLink } from "react-router-dom"

interface NavigationLinkProps {
  name: string
  href: string
}

const NavigationLink = ({name, href}: NavigationLinkProps) => {
  return (
    <NavLink to={href}>
        {({ isActive }) => (
            <span className={isActive ? "text-white": "text-gray-500 hover:text-white transition-all"}>{name}</span>
        )}
    </NavLink>
  )
}

export default NavigationLink