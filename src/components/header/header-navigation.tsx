import NavigationLink from "./nav-link"

const HeaderNavigation = () => {
  return (
    <div className="flex items-center">
        <ul className="flex gap-9 list-none font-semibold">
            <li><NavigationLink name="Home" href="/" /></li>
            <li><NavigationLink name="About" href="/about" /></li>
            <li><NavigationLink name="Work" href="/work" /></li>
            <li><NavigationLink name="Services" href="/services" /></li>
            <li><NavigationLink name="Contact" href="/contact" /></li>
        </ul>
    </div>
  )
}

export default HeaderNavigation