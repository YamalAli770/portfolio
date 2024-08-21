import { Button } from "../ui/button"
import HeaderNavigation from "./header-navigation"

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="text-gray-500 font-kristi text-4xl">Yamal</div>
      <HeaderNavigation />
      <Button className="bg-gray-700">Lets Talk</Button>
    </div>
  )
}

export default Header