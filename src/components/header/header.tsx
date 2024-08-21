import { Button } from "../ui/button"
import HeaderNavigation from "./header-navigation"

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>Yamal</div>
      <HeaderNavigation />
      <Button>Lets Talk</Button>
    </div>
  )
}

export default Header