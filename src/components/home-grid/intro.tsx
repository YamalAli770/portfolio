import { Card, CardContent, CardFooter } from "../ui/card"
import { Link } from "react-router-dom"
import CardLinkIcon from "./card-link-icon"

const Intro = () => {
  return (
    <Card className="col-span-3 bg-card-bg-dark border-gray-800 rounded-3xl">
      <CardContent className="flex gap-8 p-10">
        <img className="w-52 h-64 object-cover rounded-tl-3xl rounded-br-3xl" src="src/assets/profile-gradient.png" alt="profile-pic" />
          <div className="flex flex-col gap-1 justify-center items-center text-left">
            <h3 className="w-full uppercase text-sm font-medium text-gray-400">A Software Engineer</h3>
            <h1 className="w-full [word-spacing:100vw] text-6xl font-medium break-all text-white font-acorn">Yamal Ali</h1>
            <p className="w-full text-gray-400">I am a Software Engineer based in Karachi, Pakistan.</p>
          </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link to="/about">
          <CardLinkIcon />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Intro
