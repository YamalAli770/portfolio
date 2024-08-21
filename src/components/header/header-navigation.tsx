import { Link } from "react-router-dom"

const HeaderNavigation = () => {
  return (
    <div>
        <ul className="flex gap-9">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Work</Link>
            <Link to='/'>Contact</Link>
        </ul>
    </div>
  )
}

export default HeaderNavigation