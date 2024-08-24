import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import HeaderNavigation from "./header-navigation"

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="text-gray-500 font-kristi text-4xl">Yamal</div>
      <HeaderNavigation />
      <Button asChild className="bg-primary-btn hover:bg-white hover:text-black">
        <Link to="/contact">Let's Talk</Link>
      </Button>
    </div>
  )
}

export default Header