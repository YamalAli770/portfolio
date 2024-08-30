import { Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent  } from "../ui/sheet"
import NavigationLink from "./nav-link"
import { useState } from "react"

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden block">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex items-center">
                <Menu color="white"  cursor="pointer" />
            </SheetTrigger>
            <SheetContent className="bg-black text-gray-500 border-gray-800">
            <ul className="flex flex-col p-5 gap-9 list-none font-semibold">
                <li><NavigationLink setIsOpen={setIsOpen} name="Home" href="/" /></li>
                <li><NavigationLink setIsOpen={setIsOpen} name="About" href="/about" /></li>
                <li><NavigationLink setIsOpen={setIsOpen} name="Work" href="/work" /></li>
                <li><NavigationLink setIsOpen={setIsOpen} name="Services" href="/services" /></li>
                <li><NavigationLink setIsOpen={setIsOpen} name="Contact" href="/contact" /></li>
            </ul>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavigation