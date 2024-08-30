import { NavLink } from "react-router-dom"

interface NavigationLinkProps {
  name: string
  href: string
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationLink = ({name, href, setIsOpen}: NavigationLinkProps) => {
  const handleClick = () => {
    if(setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <NavLink to={href} onClick={handleClick}>
        {({ isActive }) => (
            <span className={isActive ? "text-white": "text-gray-500 hover:text-white transition-all"}>{name}</span>
        )}
    </NavLink>
  )
}

export default NavigationLink