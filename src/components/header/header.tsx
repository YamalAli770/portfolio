import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import HeaderNavigation from "./header-navigation"
import MobileNavigation from "./mobile-navigation"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-500 font-kristi text-4xl">Yamal</div>
      <HeaderNavigation />
      <Button asChild className="md:block hidden bg-primary-btn hover:bg-white hover:text-black">
        <Link to="/contact">Let's Talk</Link>
      </Button>
      <MobileNavigation />
    </div>
  )
}

export default Header